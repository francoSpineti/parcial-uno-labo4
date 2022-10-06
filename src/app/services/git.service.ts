import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor(private http : HttpClient) { }

  git = "https://api.github.com/users/francoSpineti";

  obtenerInfoGit(){
   return this.http.get(this.git);
  }
}
