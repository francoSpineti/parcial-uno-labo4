import { Component, OnInit } from '@angular/core';
import { Container } from 'src/app/classes/container';

@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.css']
})
export class ContainersComponent implements OnInit {

  containerSeleccionado !: Container;

  constructor() { }

  ngOnInit(): void {
  }

  cargarContainer(container : Container){
    this.containerSeleccionado = container;
  }

}
