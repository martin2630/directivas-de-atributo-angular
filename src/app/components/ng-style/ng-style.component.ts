import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="size">
     esto es una etiqueta
    </p>
    <button (click)="size = size + 5" class="btn btn-outline-primary">
      <i class="fa fa-plus"></i>  
    </button>
    <button (click)="size = size - 5" class="btn btn-outline-danger">
      <i class="fa fa-minus"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {
  public size: number;

  constructor() {
    this.size = 10;
  }

  ngOnInit() {
  }

}
