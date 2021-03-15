import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';

describe('O serviço WeatherService', () => {
  let weatherService: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [WeatherService],
    });
    weatherService = TestBed.get(WeatherService);
  });

  it('#readByCity deve, trazer os dados do clima de acordo com a cidade', () => {
    expect(weatherService.readByCity('piraju')).toBeTruthy();
  });

  it('#readByCoordinates deve, trazer os dados do clima de acordo com a latitude e longitude', () => {
    expect(
      weatherService.readByCoordinates(-23.2082232, -49.376647)
    ).toBeTruthy();
  });

  it('#readByCity deve, retornar false caso os parametros sejam vazios', () => {
    expect(weatherService.readByCity('')).toBeFalsy();
  });

  it('#readByCoordinates deve, retornar false caso os parametros sejam 0', () => {
    expect(weatherService.readByCoordinates(0, 0)).toBeFalsy();
  });
});
