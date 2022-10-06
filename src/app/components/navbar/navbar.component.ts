import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  estaLogueado !: boolean;
  
  constructor(private usuarioService : UsuarioService) { 
    this.estaLogueado = this.usuarioService.estaLogueado();
  }

  ngOnInit(): void {
  }

  cerrarSesion(){
    this.usuarioService.cerrarSesion();
  }
}
