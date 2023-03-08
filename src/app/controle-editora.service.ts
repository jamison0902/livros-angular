import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {

  editoras: Array<Editora> = [
    {
      "codEditora": 1,
      "nome": "Bookman"
    },
    {
      "codEditora": 2,
      "nome": "Cengage Learning"
    },
    {
      "codEditora": 3,
      "nome": "Azul Caneta"
    }
  ];

  getEditoras() {
    return this.editoras;
  }

  getNomeEditora(codEditora: number) {
    return this.editoras.filter((x) => x.codEditora == codEditora)[0].nome;        
  }
  
}
