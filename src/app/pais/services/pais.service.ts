import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private url: string = 'https://restcountries.com/v3.1/name/';
  results: Pais[] = []

  constructor(private http: HttpClient) {

   }


  searchCountry(query:string):Observable<Pais[]>{
    
    return this.http.get<Pais[]>(`${this.url}name/${query}`)
    
  }


  country(code:string):Observable<Pais[]>{
    return this.http.get<Pais[]>(`${this.url}alpha/${code}`)
  }
  
}
