export class Weather {
  constructor(
    public icon?: string,
    public city?: string,
    public description?: string,
    public temperature?: number,
    public temperatureMinimum?: number,
    public temperatureMaximum?: number,
    public humidity?: number,
    public sunrise?: string,
    public sunset?: string
  ) {}
}
