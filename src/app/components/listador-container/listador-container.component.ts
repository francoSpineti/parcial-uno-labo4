import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Container } from 'src/app/classes/container';
import { ContainerService } from 'src/app/services/container.service';

@Component({
  selector: 'app-listador-container',
  templateUrl: './listador-container.component.html',
  styleUrls: ['./listador-container.component.css']
})
export class ListadorContainerComponent implements OnInit {

  containers : any;
  @Output() eventoContainerSeleccionado : EventEmitter<any> = new EventEmitter<any>();

  constructor(private service : ContainerService) {
    this.containers = this.service.obtenerContainers();
   }

  ngOnInit(): void {
  }

  seleccionarContainerEvento(container : Container){
    this.eventoContainerSeleccionado.emit(container);
  }

}
