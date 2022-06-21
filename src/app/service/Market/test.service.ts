import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TestService {
  url =" http://www.yarapb2a.somee.com/WeatherForecast";
  constructor( private http: HttpClient) { }
  getall():Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }
}
