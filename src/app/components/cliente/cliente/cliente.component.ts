import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../shared/Cliente';
import { Router } from '../../../../../node_modules/@angular/router';
import { ClienteApiService } from '../../../service/cliente-api.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  titulo = 'Lista de Clientes';

  displayedColumns: string[] = ['nome', 'sexo', 'email'];
  isLoadingResults = true;
  clientes: Cliente[] = [];

  constructor(private api: ClienteApiService, private router: Router) { }

  add() {
    this.router.navigate(['/clientes-add']);
  }

  getClientes() {
    this.api.getCliente().subscribe(cliente => {
      this.clientes = cliente;
      console.log(this.clientes);

      this.isLoadingResults = false;
    }, err => {
      console.log(err);
    });
  }


  deletaCliente(id: number) {
    this.api.deleteCliente(id).subscribe(res => {
      this.getClientes()
    }, (err) => {
      console.log(err);
    })
  }


  ngOnInit() {
    console.log('');
    this.getClientes();
  }

}









