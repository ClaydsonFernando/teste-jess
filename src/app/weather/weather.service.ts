import { Injectable } from '@angular/core';
import { Observable, throwError } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  apiKey: string = '9afb77b830559af41c55a78620eda19a';
  apiPath: string = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&lang=pt_br&units=metric`;

  constructor(private http: HttpClient) {}

  readByCity(city: string): Observable<any> | undefined {
    if (city.length) {
      const url = `${this.apiPath}&q=${city}`;
      return this.http.get<any>(url).pipe(
        map((object) => object),
        catchError(this.handleError)
      );
    }
    return;
  }

  readByCoordinates(
    latitude: number,
    longitude: number
  ): Observable<any> | undefined {
    if (latitude && longitude) {
      const url = `${this.apiPath}&lat=${latitude}&lon=${longitude}`;
      return this.http.get<any>(url).pipe(
        map((object) => object),
        catchError(this.handleError)
      );
    }
    return;
  }

  // protected method

  protected handleError(error: any) {
    console.log('ERRO NA REQUISIÇÃO => ', error);
    return throwError(error);
  }
}
