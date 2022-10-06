import { Component, OnInit } from '@angular/core';
import { GitService } from 'src/app/services/git.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  data : any;

  constructor(private git : GitService) { }

  ngOnInit(): void {
    this.git.obtenerInfoGit().subscribe(ref =>{
      this.data = JSON.parse(JSON.stringify(ref));  
    });
  }

}
