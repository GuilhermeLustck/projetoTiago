import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConteudoService } from '../cont/dados/conteudo.service';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.page.html',
  styleUrls: ['./anuncio.page.scss'],
})
export class AnuncioPage implements OnInit {
  cont:any
  algo:any
  dados:any
  
  constructor(private rot:Router,private serv:ConteudoService) { }

  ngOnInit() {
    this.cont=this.serv.get()
    this.algo = this.cont;
    this.dados=[]
  }
  perfil(){
    this.rot.navigate(["perfil"])
  }
  carrinho(){
    this.rot.navigate(["carrinho"]);
  }

  getcar(idc:number){
    
    this.dados.push(this.algo[idc-1])
    this.serv.dados=this.dados
    console.log(this.dados)
    
  }

 
  

}
