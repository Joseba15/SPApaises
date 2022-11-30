import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent implements OnInit {

  query:string='';
  countries:Pais[]=[];
  error:boolean=false;
  TextError:string='';
  constructor(private countryService: PaisService) { }

  ngOnInit(): void {
  }

  // get countries() :Pais[]{
  //   return this.countryService.results;
  // }

  search(){
    this.TextError=this.query
    this.countryService.searchCountry(this.query)
    .subscribe({
      next:(resp)=> {
        this.countries= resp
        this.error=false;
      },
      error:(error)=> this.error=true ,


    })

    this.query='';
  }

}
