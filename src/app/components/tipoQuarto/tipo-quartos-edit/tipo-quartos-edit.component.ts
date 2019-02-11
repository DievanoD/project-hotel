import { Component, OnInit, Input } from '@angular/core';
import { TipoQuarto } from 'src/app/shared/TipoQuarto';
import { FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';
import { TipoQuartoApiService } from 'src/app/service/tipo-quarto-api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tipo-quartos-edit',
  templateUrl: './tipo-quartos-edit.component.html',
  styleUrls: ['./tipo-quartos-edit.component.css']
})
export class TipoQuartosEditComponent implements OnInit {

  @Input() tipoQuarto = new TipoQuarto;
  tipoQuartoEditForm: FormGroup;

  id:number;
  
  descricao: string = '';
  valor: number;

  isLoadingResults = false;

  constructor(private api: TipoQuartoApiService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    
    const { codigo, descricao, valor } = this.tipoQuartoEditForm.value;
    this.tipoQuarto = new TipoQuarto();
    this.tipoQuarto.codigo = codigo;
    this.tipoQuarto.descricao = descricao;
    this.tipoQuarto.valor = valor;
  
    this.api.updateTipoQuarto(this.id, this.tipoQuarto)
      .subscribe(res => {
          console.log(res);
          let id = this.id;
          this.isLoadingResults = false;
          this.router.navigate(['/tipoquartos-details', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
    }

  updateQuarto(){
    this.api.updateTipoQuarto(this.route.snapshot.params['id'], this.tipoQuarto).subscribe((tipoQuarto) => {
        this.router.navigate(['/tipoquartos-details/' + tipoQuarto.id]);
      }, (err) => {
        console.error(err);
      }
    );
  }

  deletaQuartos(id: number) {
    this.api.deleteTipoQuarto(id)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/tipoquartos']);
      }, (err) => {
        console.log(err);
      }
    );  
  }

  ngOnInit() {
    this.api.getTipoQuartoPorId(this.route.snapshot.params['id']).subscribe(
      (tipoQuarto: TipoQuarto) => {
        console.log(TipoQuarto);
        this.id = tipoQuarto.codigo;
        this.tipoQuartoEditForm.setValue({
          descricao: tipoQuarto.descricao,
          valor: tipoQuarto.valor,
        });
      });

      this.tipoQuartoEditForm = this.formBuilder.group({
        'descricao' : [null, Validators.required],
        'valor' : [null, Validators.required]
      })
  }

}
