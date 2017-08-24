import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(
    private _activatedRoute: ActivatedRoute
  ) {
    this._activatedRoute.params.subscribe(response => {
      console.log('param padre');
      console.log(response);
    });
  }

  ngOnInit() {
  }

}
