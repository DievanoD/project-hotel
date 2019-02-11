import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../shared/Cliente';
import { ClienteApiService } from '../../../service/cliente-api.service';
import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';


@Component({
  selector: 'app-cliente-details',
  templateUrl: './cliente-details.component.html',
  styleUrls: ['./cliente-details.component.css']
})
export class ClienteDetailsComponent implements OnInit {

  cliente = new Cliente();


  constructor(private api: ClienteApiService, private router: Router, private route: ActivatedRoute) { }

  deletaCliente(id: number) {
    this.api.deleteCliente(id)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/cliente']);
      }, (err) => {
        console.log(err);
      }
    );  
  }            


  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.api.getClientePorId(id).subscribe((cliente: Cliente) => {
      console.log(cliente);
      this.cliente = cliente;
    });
  }

}










