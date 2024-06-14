import { Component, OnInit } from '@angular/core';
import { ConteudoService } from '../cont/dados/conteudo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {
  cont:any
  constructor(private serv:ConteudoService,private rot:Router) { }

  ngOnInit() {
    this.cont=this.serv.dados
  }

  voltar(){
    this.rot.navigate(["anuncio"])
  }
}
