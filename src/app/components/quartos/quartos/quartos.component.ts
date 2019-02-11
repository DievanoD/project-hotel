import { Component, OnInit } from '@angular/core';
import { QuartoApiService } from '../../../service/quarto-api.service';
import { Router } from '../../../../../node_modules/@angular/router';
import { Quarto } from '../../../shared/Quarto';

@Component({
  selector: 'app-quartos',
  templateUrl: './quartos.component.html',
  styleUrls: ['./quartos.component.css']
})
export class QuartosComponent implements OnInit {
  titulo = 'Lista de quartos';
  // NEW
  displayedColumns: string[] = ['cod_quarto', 'numero'];
  isLoadingResults = true;
  // -----------
  quartos: Quarto[] = [];

  constructor(private api: QuartoApiService, private router: Router) { }

  add(){
    this.router.navigate(['/quartos-add']);
  }

  getQuartos() {
    this.api.getQuartos().subscribe(quartos => {
      this.quartos = quartos;
      console.log(this.quartos);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
    });
  }

  deletaQuarto(id: number){
    this.api.deleteQuarto(id).subscribe(res => {
      this.getQuartos()
    }, (err) => {
      console.log(err);
    })
  }

  ngOnInit() {
    this.getQuartos();
  }

}
