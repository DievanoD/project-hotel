import { Component, OnInit } from '@angular/core';
import { TipoQuarto } from 'src/app/shared/TipoQuarto';
import { Router, ActivatedRoute } from '@angular/router';
import { TipoQuartoApiService } from 'src/app/service/tipo-quarto-api.service';

@Component({
  selector: 'app-tipo-quartos-details',
  templateUrl: './tipo-quartos-details.component.html',
  styleUrls: ['./tipo-quartos-details.component.css']
})
export class TipoQuartosDetailsComponent implements OnInit {

  tipoQuarto = new TipoQuarto();
  descricao: string;
  valor: number;

  constructor(private api: TipoQuartoApiService, private router: Router, private route: ActivatedRoute) { }

  deletaTipoQuarto(id: number) {
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
    let id = this.route.snapshot.params['id'];
    this.api.getTipoQuartoPorId(id).subscribe((tipoQuarto: TipoQuarto) => {
      console.log(tipoQuarto);
      this.tipoQuarto = tipoQuarto;
    });
  }

}
