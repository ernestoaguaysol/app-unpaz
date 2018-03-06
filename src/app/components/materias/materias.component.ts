import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styles: []
})
export class MateriasComponent implements OnInit {

  materias: any[] = [];

  constructor(
    public _dataService: DataService
  ) {
   }

  ngOnInit() {
    this._dataService.materias()
    .subscribe(resp => {
      this.materias = resp;
      console.log(this.materias);
    });
  }

}
