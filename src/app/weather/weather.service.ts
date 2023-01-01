import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) { }
  getWeather() {
    return this.http.get("https://localhost:7070/weatherforecast");
  }
}