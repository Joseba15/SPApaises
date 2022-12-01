import { Component, Input, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent implements OnInit {
  query:string='';
  countries:Country[]=[];
  textError:string='';
  error:boolean=false;
  
  constructor(private countryService: PaisService) { }

  ngOnInit(): void {
  }

  @Input

  search(){
    this.textError=this.query
    this.countryService.searchCapital(this.query)
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
