import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../service/usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  usuarios;

  constructor(public usuariosServices: UsuariosService) {}

  ngOnInit(): void {
    this.consultarApi();
  }

  consultarApi() {
    this.usuariosServices.getUsuarios().subscribe((data) => {
      console.log(data);
      this.usuarios = data;
    });
  }
}
