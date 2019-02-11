import { Component, OnInit, Input } from '@angular/core';
import { Quarto } from '../../../shared/Quarto';
import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { QuartoApiService } from '../../../service/quarto-api.service';
import { FormGroup, FormBuilder, NgForm, Validators } from '../../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-quartos-edit',
  templateUrl: './quartos-edit.component.html',
  styleUrls: ['./quartos-edit.component.css']
})
export class QuartosEditComponent implements OnInit {

  @Input() quarto = new Quarto;
  quartosEditForm: FormGroup;

  id:number;
  
  numero: number;
  andar: string = '';
  status: string = '';

  isLoadingResults = false;

  constructor(private api: QuartoApiService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    
    const { codQuarto, numero, andar, status } = this.quartosEditForm.value;
    this.quarto = new Quarto();
    this.quarto.codQuarto = codQuarto;
    this.quarto.numero = numero;
    this.quarto.andar = andar;
    this.quarto.status = status;
    // this.quarto.tipoQuarto = tipoQuarto;
  
    this.api.updateQuarto(this.id, this.quarto)
      .subscribe(res => {
          console.log(res);
          let id = this.id;
          this.isLoadingResults = false;
          this.router.navigate(['/quartos-details', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
    }

  updateQuarto(){
    this.api.updateQuarto(this.route.snapshot.params['id'], this.quarto).subscribe((quarto) => {
        this.router.navigate(['/quartos-details/' + quarto.id]);
      }, (err) => {
        console.error(err);
      }
    );
  }

  deletaQuartos(id: number) {
    this.api.deleteQuarto(id)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/quartos']);
      }, (err) => {
        console.log(err);
      }
    );  
  }

  ngOnInit() {
    this.api.getQuartoPorId(this.route.snapshot.params['id']).subscribe(
      (quarto: Quarto) => {
        console.log(quarto);
        this.id = quarto.codQuarto;
        this.quartosEditForm.setValue({
          numero: quarto.numero,
          andar: quarto.andar,
          status: quarto.status
        });
      });

      this.quartosEditForm = this.formBuilder.group({
        'numero' : [null, Validators.required],
        'andar' : [null, Validators.required],
        'status' : [null, Validators.required]
      })
  }

}
