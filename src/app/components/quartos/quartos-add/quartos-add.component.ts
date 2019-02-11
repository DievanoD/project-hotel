import { Component, OnInit, Input } from '@angular/core';
import { QuartoApiService } from '../../../service/quarto-api.service';
import { Router } from '../../../../../node_modules/@angular/router';
import { FormGroup, FormBuilder, NgForm, Validators } from '../../../../../node_modules/@angular/forms';
import { Quarto } from '../../../shared/Quarto';
import { TipoQuartoApiService } from 'src/app/service/tipo-quarto-api.service';
import { TipoQuarto } from 'src/app/shared/TipoQuarto';

@Component({
  selector: 'app-quartos-add',
  templateUrl: './quartos-add.component.html',
  styleUrls: ['./quartos-add.component.css']
})
export class QuartosAddComponent implements OnInit {

  // @Input() quarto = { numero:'', andar:'', status:'', tipoQuarto:''};
  @Input() quarto = new Quarto;
  quartosForm: FormGroup;

  numero: number;
  andar: string = '';
  status: string = '';
  tipoQuarto: number;

  tipoQuartos: TipoQuarto[] = [];

  isLoadingResults = false;

  constructor(private api: QuartoApiService, private api2: TipoQuartoApiService, private router: Router, private formBuilder: FormBuilder) { }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    
    const { numero, andar, status, tipoQuarto } = this.quartosForm.value;
    this.quarto = new Quarto();
    this.quarto.numero = numero;
    this.quarto.andar = andar;
    this.quarto.status = status;
    this.quarto.tipoQuarto = tipoQuarto;
  
    this.api.addQuartos(this.quarto)
      .subscribe(res => {
          console.log(res);
          // let id = res['codQuarto'];
          this.isLoadingResults = false;
          // this.router.navigate(['/quarto-details', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
    }

  addQuarto(){
    this.api.addQuartos(this.quarto).subscribe((resultado) => {
      this.router.navigate['/quartos'];
    }, (err) => {
      console.log(err);
    });
  }

  getTipo(){
    this.api2.getTipoQuarto().subscribe(tipoQuartos => {
      this.tipoQuartos = tipoQuartos;
      console.log(this.tipoQuartos);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
    });
  }


  ngOnInit() {
    this.getTipo();
    this.quartosForm = this.formBuilder.group({
      'numero' : [null, Validators.required],
      'andar' : [null, Validators.required],
      'status' : [null, Validators.required],
      'tipoQuarto' : [null, Validators.required]
    });
  }

}
