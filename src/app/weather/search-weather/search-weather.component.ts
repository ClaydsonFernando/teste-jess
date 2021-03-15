import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-weather',
  templateUrl: './search-weather.component.html',
  styleUrls: ['./search-weather.component.css'],
})
export class SearchWeatherComponent implements OnInit {
  @ViewChild('searchWeather') searchWeather: ElementRef;
  searchValue: string = '';

  constructor() {}
  ngOnInit(): void {}

  search() {
    if (this.searchWeather)
      this.searchValue = this.searchWeather.nativeElement.value;
    return;
  }
}
