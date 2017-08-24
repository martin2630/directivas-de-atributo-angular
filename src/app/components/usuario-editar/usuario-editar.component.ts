import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.css']
})
export class UsuarioEditarComponent implements OnInit {

  constructor(
    private _activatedRoute: ActivatedRoute
  ) {
    this._activatedRoute.parent.params.subscribe(response => {
      console.log("param hijo");
      console.log(response);
    });
  }

  ngOnInit() {
  }

}
