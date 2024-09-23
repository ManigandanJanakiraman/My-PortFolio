import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import './interface'
@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  jsonURL = 'json/input.json';
  constructor(private http: HttpClient) { }

  getData(): Observable<my_Data> {
    return this.http.get<my_Data>(this.jsonURL);
  }
}
