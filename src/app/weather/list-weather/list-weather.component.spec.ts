import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { WeatherService } from './../weather.service';
import { ListWeatherComponent } from './list-weather.component';

describe('O component ListWeatherComponent', () => {
  let listWeatherComponent: ListWeatherComponent;
  let weatherService: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [WeatherService],
    });
    weatherService = TestBed.get(WeatherService);

    listWeatherComponent = new ListWeatherComponent(weatherService);
  });

  it('#readByCity deve, setar a cidade e buscar os dados do clima', () => {
    listWeatherComponent.readByCity('Piraju');
    expect(listWeatherComponent.weather).toBeTruthy();
  });

  it('#readByCoordinates deve, setar as coordenadas e buscar os dados do clima', () => {
    listWeatherComponent.readByCoordinates();
    expect(listWeatherComponent.weather).toBeTruthy();
  });
});
