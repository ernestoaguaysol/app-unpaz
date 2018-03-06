import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http: Http) {

   }

   materias() {
    return this.http.get('assets/data/data.cursos.json')
          .map(resp => resp.json().materias);
   }

}
