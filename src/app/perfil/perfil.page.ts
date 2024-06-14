import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  nome:string='algo da silva'

  constructor(private rot:Router) { }

  ngOnInit() {
  }
  

  voltar(){
    this.rot.navigate(["anuncio"])
  }
}
