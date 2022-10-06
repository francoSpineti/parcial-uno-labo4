import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  estaLogueado !: boolean;
  esAdmin !: boolean
  
  constructor(private usuarioService : UsuarioService) { 
    this.estaLogueado = this.usuarioService.estaLogueado();
    this.esAdmin = this.usuarioService.isAdmin();
  }

  ngOnInit(): void {
  }

  cerrarSesion(){
    this.usuarioService.cerrarSesion();
  }
}
