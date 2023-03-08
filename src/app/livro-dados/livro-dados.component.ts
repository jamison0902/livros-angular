import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit {

  formUsu: FormGroup;

  private servLivros: ControleLivrosService;
  private servEditora: ControleEditoraService;

  public editoras: Array<Editora> = [];
  public livro: Livro = new Livro();

  router: Router;
  autoresForm: string = '';

  constructor(private formBuilder: FormBuilder, router: Router, servEditora: ControleEditoraService, servLivros: ControleLivrosService) {
    this.router = router;
    this.servEditora = servEditora;
    this.servLivros = servLivros;
    this.formUsu = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      resumo: ['', [Validators.required]],
      codEditora: ['', [Validators.required]],
      autores: ['', [Validators.required]]
    });
  }


  getError(campo: string): string {
    // console.log(this.formUsu.get('codEditora'));
    // console.log(this.formUsu.get('titulo'));
    if (this.formUsu.get(campo)?.hasError('required'))
      return "Campo Obrigatório";
    return "Erro no campo";
  }

  incluir = (): void => {
    this.livro.autores = this.autoresForm.split(',');
    this.servLivros.incluir(this.livro);
    this.router.navigateByUrl("/lista")
  }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }
}
