import { Component, OnInit, Input } from '@angular/core';
import { TipoQuarto } from 'src/app/shared/TipoQuarto';
import { FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';
import { TipoQuartoApiService } from 'src/app/service/tipo-quarto-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipo-quartos-add',
  templateUrl: './tipo-quartos-add.component.html',
  styleUrls: ['./tipo-quartos-add.component.css']
})
export class TipoQuartosAddComponent implements OnInit {

  @Input() tipoQuarto = new TipoQuarto;
  tipoQuartoForm: FormGroup;

  descricao: string = '';
  valor: number;

  constructor(private api: TipoQuartoApiService, private router: Router, private formBuilder: FormBuilder) { }

  onFormSubmit(form: NgForm) {
    // this.isLoadingResults = true;

    const { descricao, valor } = this.tipoQuartoForm.value;
    this.tipoQuarto = new TipoQuarto();
    this.tipoQuarto.descricao = descricao;
    this.tipoQuarto.valor = valor;

    this.api.addTipoQuartos(this.tipoQuarto)
      .subscribe(res => {
        console.log(res);
        // let id = res['codQuarto'];
        // this.isLoadingResults = false;
        // this.router.navigate(['/quarto-details', id]);
      }, (err) => {
        console.log(err);
        // this.isLoadingResults = false;
      });
  }

  addTipoQuarto(){
    this.api.addTipoQuartos(this.tipoQuarto).subscribe((resultado) => {
      // this.router.navigate['/tipoQuarto'];
    }, (err) => {
      console.log(err);
    });
  }

  ngOnInit() {
    this.tipoQuartoForm = this.formBuilder.group({
      'descricao' : [null, Validators.required],
      'valor' : [null, Validators.required]
    });
  }

}
