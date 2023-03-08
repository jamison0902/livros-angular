import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {

  livros: Array<Livro> = [
    {
      "codigo": 1,
      "codEditora": 1,
      "titulo": "O Programador Pragmático",
      "resumo": "Conteúdo de Programação e Desenvolvimento.",
      "autores": ["Andrew Hunt", "David Thomas"]
    },
    {
      "codigo": 2,
      "codEditora": 2,
      "titulo": "Algoritmos e Lógica Da Programação ",
      "resumo": "Livro sobre Programação",
      "autores": ["Marco  Souza", "Marcelo Gomes"]
    },
    {
      "codigo": 3,
      "codEditora": 3,
      "titulo": "O Conto Macabro",
      "resumo": "Livro bizarro",
      "autores": ["Lampião"],

    }
  ];

  obterLivros= ():Array<Livro> => this.livros;

  private getPos(codigo: number): number {
    for (let i = 0; i < this.livros.length; i++)
      if (codigo == this.livros[i].codigo)
        return i;
    return -1;
  }

  incluir(livro: Livro): void {
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    let pos = this.getPos(codigo);
    if (pos > -1)
      this.livros.splice(pos, 1);
  } 
   
}
