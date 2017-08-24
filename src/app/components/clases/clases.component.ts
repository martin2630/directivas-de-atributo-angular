import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {
  alert: string = 'alert-danger';
  loading = false;



  propiedades: Object = {
    danger: false
  }



  constructor() { }

  ejecutar(){
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3500);
  }

  ngOnInit() {
  }

}
