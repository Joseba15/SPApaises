import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {
  code:String='';
  constructor(private paisService: PaisService  , private activeRoute: ActivatedRoute) { 
    console.log(route.snapshot.params['id'])
    
  }

  ngOnInit(): void {
    this.code= this.activeRoute.snapshot.params['id'];
  }

  get pais():Pais{
     this.paisService.country(this.code)
    .subscribe({
      next:(resp) => {return resp},
      error:(error) => console.log(error)
    })

    return 
  }

}
