import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/pais';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  
  private url:string= 'https://restcountries.com/v3.1/';
  
  constructor(private http:HttpClient) { }

  searchCountry(query:string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.url}name/${query}`)  
  }

  country(code:string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.url}alpha/${code}`)
  }

  searchCapital(query:string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.url}capital/${query}`)  
  }


}
