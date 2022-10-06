import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getPaisesAfricanos(){
    return this.http.get('https://restcountries.com/v3.1/region/africa');
  }

  getPaisesEuropeos(){
    return this.http.get('https://restcountries.com/v3.1/region/europe');
  }

}
