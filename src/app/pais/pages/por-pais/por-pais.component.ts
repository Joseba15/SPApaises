import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent implements OnInit {
  query:string='';
  countries:Country[]=[];
  textError:string='';
  error:boolean=false;
  
  constructor(private countryService: PaisService) { }

  ngOnInit(): void {
  }
  // get countries():Country[]{
  //   return this.countryService.results;
  // }

  search(){
    this.textError=this.query
    this.countryService.searchCountry(this.query)
    .subscribe({
      next: (resp)=> {
        this.countries = resp
        this.error=false;
      },
      error: (error)=> {
        this.error=true
        this.countries=[]
      }

    })
    this.query=''
  }

}
