import { Component, OnInit } from '@angular/core';
import { QuartoApiService } from '../../../service/quarto-api.service';
import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { Quarto } from '../../../shared/Quarto';

@Component({
  selector: 'app-quartos-details',
  templateUrl: './quartos-details.component.html',
  styleUrls: ['./quartos-details.component.css']
})
export class QuartosDetailsComponent implements OnInit {

  quarto = new Quarto();
  numero: number;
  andar: string;
  status: string;
  tipoQuarto: string;

  constructor(private api: QuartoApiService, private router: Router, private route: ActivatedRoute) { }

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
    let id = this.route.snapshot.params['id'];
    this.api.getQuartoPorId(id).subscribe((quarto: Quarto) => {
      console.log(quarto);
      this.quarto = quarto;
    });
  }

}
