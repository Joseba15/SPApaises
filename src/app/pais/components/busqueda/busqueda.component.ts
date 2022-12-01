import { query } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  query :string='';
  constructor() { }

  ngOnInit(): void {
  }

  @Output() onSearch : EventEmitter<string> = new EventEmitter;

  search(){
    this.onSearch.emit(this.query);
  }

}
