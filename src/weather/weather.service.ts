import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from 'rxjs';

@Injectable()
export class WeatherService {
  constructor(private readonly httpService: HttpService) {}
  async getWeatherInSeoul() {
    const authKey = process.env.AUTHKEY;
    const url = `http://api.weatherapi.com/v1/current.json?key=${authKey}&q=Seoul`;
    const header = { headers: { 'Content-Type': 'application/json' } };
    const responseData = await lastValueFrom(
      this.httpService.get(url, header).pipe(map((response) => response.data)),
    );

    return responseData;
  }
}
