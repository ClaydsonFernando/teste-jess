import { SearchWeatherComponent } from './search-weather.component';

describe('O component SearchWeatherComponent', () => {
  let searchWeatherComponent: SearchWeatherComponent;

  beforeEach(() => {
    searchWeatherComponent = new SearchWeatherComponent();
  });

  it('#search deve, setar o nome da cidade no valor a ser pesquisado', () => {
    searchWeatherComponent.searchValue = 'Piraju';
    expect(searchWeatherComponent.searchValue).toBe('Piraju');
  });
});
