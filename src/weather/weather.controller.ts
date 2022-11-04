import { Controller, Get } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('api/weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}
  @Get()
  getWeatherInSeoul() {
    return this.weatherService.getWeatherInSeoul();
  }
}
