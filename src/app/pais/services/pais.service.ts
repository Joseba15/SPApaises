import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private Pais[]:string[] = []
  private url: string = 'https://restcountries.com/v3.1/all';
  private results: string[] = []

  constructor(private http: HttpClient) {
    
   }


  searchCountry(query:string):void{
    
    this.http.get<Pais[]>(this.url+query)
    .subscribe((resp)=> this.results = resp
    )
  }
}
