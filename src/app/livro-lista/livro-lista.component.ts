import { Component, OnInit } from '@angular/core';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Editora } from '../editora';
import { Livro } from '../livro';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {

  private servLivros: ControleLivrosService;
  private servEditora: ControleEditoraService;

  public editoras: Array<Editora> = [];
  public livros: Array<Livro> = [];

  constructor(servLivros: ControleLivrosService, servEditora: ControleEditoraService) {
    this.servLivros = servLivros;
    this.servEditora = servEditora;
  }

  excluir(codigo: number): void {
    this.servLivros.excluir(codigo);
    this.livros = this.servLivros.obterLivros();
  }

  obterNome=(codEditora:number):string=>{
    return this.servEditora.getNomeEditora(codEditora);
  }

  ngOnInit(): void {
    this.livros = this.servLivros.obterLivros();
    this.editoras = this.servEditora.getEditoras();
  }

}
