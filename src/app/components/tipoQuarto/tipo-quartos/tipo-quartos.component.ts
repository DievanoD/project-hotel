import { Component, OnInit } from '@angular/core';
import { TipoQuarto } from 'src/app/shared/TipoQuarto';
import { TipoQuartoApiService } from 'src/app/service/tipo-quarto-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipo-quartos',
  templateUrl: './tipo-quartos.component.html',
  styleUrls: ['./tipo-quartos.component.css']
})
export class TipoQuartosComponent implements OnInit {
  titulo = 'Lista de quartos';
  // NEW
  displayedColumns: string[] = ['descricao', 'valor'];
  isLoadingResults = true;
  // -----------
  tipoQuarto: TipoQuarto[] = [];

  constructor(private api: TipoQuartoApiService, private router: Router) { }

  add(){
    this.router.navigate(['/tipoquarto-add']);
  }

  getTipoQuartos() {
    this.api.getTipoQuarto().subscribe(tipoQuartos => {
      this.tipoQuarto = tipoQuartos;
      console.log(this.tipoQuarto);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
    });
  }

  deletaTipoQuarto(id: number){
    this.api.deleteTipoQuarto(id).subscribe(res => {
      this.getTipoQuartos()
    }, (err) => {
      console.log(err);
    })
  }

  ngOnInit() {
    this.getTipoQuartos();
  }

}
