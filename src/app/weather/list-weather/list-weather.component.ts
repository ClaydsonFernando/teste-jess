import { throwError } from 'rxjs';
import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { Weather } from "./../weather.model";
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-list-weather',
  templateUrl: './list-weather.component.html',
  styleUrls: ['./list-weather.component.css'],
})
export class ListWeatherComponent implements OnInit, OnChanges {
  weather: Weather[] = [];
  @Input('search-value') searchValue: string;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.readByCoordinates();
  }

  ngOnChanges() {
    if (this.searchValue) this.readByCity(this.searchValue);
  }

  readByCity(city: string) {
    this.weatherService.readByCity(city)?.subscribe(
      (ObjectWeather) => {
        this.createObjectWeather(ObjectWeather);
      },
      (error) => this.handleError(error)
    );
  }

  readByCoordinates() {
    navigator.geolocation.watchPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        if (latitude && longitude)
          this.weatherService.readByCoordinates(latitude, longitude)?.subscribe(
            (ObjectWeather) => {
              this.readByCity(ObjectWeather.name);
            },
            (error) => this.handleError(error)
          );
      },
      (error) => this.handleError(error)
    );
  }

  // protected method
  protected getHoursAndMinutes(time: number): string {
    const hours = new Date().getHours().toString();
    const minutes = new Date(time).getMinutes().toString();
    return `${hours}:${minutes}`;
  }

  protected createObjectWeather(ObjectWeather: any) {
    const { name, main, sys, weather } = ObjectWeather;
    this.weather[0] = {
      icon: `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]['icon']}.svg`,
      city: name,
      description: weather[0]['description'],
      temperature: parseInt(main.temp),
      temperatureMinimum: parseInt(main.temp_min),
      temperatureMaximum: parseInt(main.temp_max),
      humidity: parseInt(main.humidity),
      sunrise: this.getHoursAndMinutes(sys.sunrise),
      sunset: this.getHoursAndMinutes(sys.sunset),
    };
  }

  protected handleError(error: any) {
    alert('Ocorreu um erro, tente novamente!');
    console.log('ERRO NA REQUISIÇÃO => ', error);
    return throwError(error);
  }
}
