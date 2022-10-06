import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pais } from 'src/app/classes/pais';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  @Output() eventoPaisSeleccionado : EventEmitter<any> = new EventEmitter<any>();
  auxPaisesAfricanos : Array<any> = [];
  auxPaisesEuropeos : Array<any> = [];
  listaPaisesAfricanos : Array<any> = [];
  listaPaisesEuropeos : Array<any> = [];
  continente!:any;
  europeo:boolean = false;
  africano:boolean = false;

  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
    this.apiService.getPaisesAfricanos().subscribe(ref=>{
      this.listaPaisesAfricanos = (JSON.parse(JSON.stringify(ref)));
    });
    this.apiService.getPaisesEuropeos().subscribe(ref=>{
      this.listaPaisesEuropeos = (JSON.parse(JSON.stringify(ref)));
    });
  }

  continenteSeleccionado(){
    if(this.continente == "Africano"){
      if(this.listaPaisesAfricanos.length != 0){
        this.cargarListaPaisesAfricanos();
        this.europeo = false;
        this.africano = true;
      }
      this.europeo = false;
      this.africano = true;
    }else{
      if(this.listaPaisesEuropeos.length != 0){
        this.cargarListaPaisesEuropeos();
        this.africano = false;
        this.europeo = true;
      }
      this.africano = false;
      this.europeo = true;
    }
  }

  enviarEventoPaisSeleccionado(pais : Pais){
    this.eventoPaisSeleccionado.emit(pais);
  }

  private cargarListaPaisesAfricanos(){
    let aux = this.listaPaisesAfricanos.filter( (pais) =>{
      return(pais.name.common === "Angola" || pais.name.common === "Ghana" || pais.name.common === "Togo" || pais.name.common === "Senegal" ||
      pais.name.common === "Nigeria");
    });
    this.auxPaisesAfricanos = [];
    aux.forEach(element => {
        this.auxPaisesAfricanos.push(new Pais(element.name.common,element.flags.png));
    });
  }

  private cargarListaPaisesEuropeos(){
    let aux = this.listaPaisesEuropeos.filter( (pais) =>{
      return(pais.name.common === "Italy" || pais.name.common === "Poland" || pais.name.common === "France" || pais.name.common === "Germany" ||
      pais.name.common === "Spain");
    });
    this.auxPaisesEuropeos = [];
    aux.forEach(element => {
      this.auxPaisesEuropeos.push(new Pais(element.name.common,element.flags.png));
    });
  }


}
