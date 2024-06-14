import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConteudoService {
  cont:any
  dados:any
  constructor() { }
  ngOnInit(){
    this.dados=[]
  }
  get(){
    this.cont=[
      {
          "id": 1,
          "espeto": "Carne",
          "valor": 10.00
      },
      {
          "id": 2,
          "espeto": "Frango",
          "valor": 8.50
      },
      {
          "id": 3,
          "espeto": "Linguiça",
          "valor": 9.00
      },
      {
          "id": 4,
          "espeto": "Coração",
          "valor": 7.50
      },
      {
          "id": 5,
          "espeto": "Queijo",
          "valor": 5.00
      },
      {
          "id": 6,
          "espeto": "Legumes",
          "valor": 6.50
      },
      {
          "id": 7,
          "espeto": "Picanha",
          "valor": 15.00
      },
      {
          "id": 8,
          "espeto": "Peixe",
          "valor": 12.00
      },
      {
          "id": 9,
          "espeto": "Camarao",
          "valor": 18.00
      },
      {
          "id": 10,
          "espeto": "Abacaxi",
          "valor": 4.50
      },
      {
          "id": 11,
          "espeto": "Porco",
          "valor": 9.50
      },
      {
          "id": 12,
          "espeto": "Bacon",
          "valor": 8.00
      },
      {
          "id": 13,
          "espeto": "Presunto",
          "valor": 7.00
      },
      {
          "id": 14,
          "espeto": "Tomate",
          "valor": 3.50
      },
      {
          "id": 15,
          "espeto": "Cordeiro",
          "valor": 14.00
      },
      {
          "id": 16,
          "espeto": "Calabresa",
          "valor": 8.00
      },
      {
          "id": 17,
          "espeto": "Alcatra",
          "valor": 13.00
      },
      {
          "id": 18,
          "espeto": "Tofu",
          "valor": 5.50
      },
      {
          "id": 19,
          "espeto": "Cogumelo",
          "valor": 6.00
      },
      {
          "id": 20,
          "espeto": "Costela",
          "valor": 11.00
      }
  ]
    return this.cont
  }



  
}
