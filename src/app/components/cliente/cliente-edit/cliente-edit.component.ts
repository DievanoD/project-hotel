import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from '../../../shared/Cliente';
import { FormGroup, FormBuilder, NgForm, Validators } from '../../../../../node_modules/@angular/forms';
import { ClienteApiService } from '../../../service/cliente-api.service';
import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';


@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent implements OnInit {

  @Input() cliente = new Cliente();
  clienteEditForm: FormGroup;

  id:number;

  nome: string='';
  cpf: string='';
  sexo: string='';
  email:string='';

  isLoadingResults = false;

  constructor(private api: ClienteApiService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }


  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;

    const { codigo, nome, cpf, sexo, email } = this.clienteEditForm.value;
    this.cliente = new Cliente();
    this.cliente.codigo = codigo;
    this.cliente.cpf = cpf;
    this.cliente.nome = nome;
    this.cliente.sexo = sexo;
    this.cliente.email = email;

    this.api.updateCliente(this.id, this.cliente)
        .subscribe(res => {
          console.log(res);
          let id = this.id;
          this.isLoadingResults = false;
          this.router.navigate(['/clientes-details', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  updateCliente() {
    this.api.updateCliente(this.route.snapshot.params['id'], this.cliente).subscribe((cliente) => {
      this.router.navigate(['/clientes-details/' + cliente.id]);
    }, (err) => {
      console.log(err);
    });
  }

  deletaCliente(id: number) {
    this.api.deleteCliente(id)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/clientes']);
      }, (err) => {
        console.log(err);
      }
    );  
  }

  // clienteDetails() {
  //   this.router.navigate(['/cliente-details', this.id]);
  // }

  ngOnInit() {
    this.api.getClientePorId(this.route.snapshot.params['id']).subscribe(
      (cliente: Cliente) => {
      console.log(cliente);
      this.id = cliente.codigo;
      this.clienteEditForm.setValue({
        nome: cliente.nome,
        cpf: cliente.cpf,
        sexo: cliente.sexo,
        email: cliente.email
      });
    });

    this.clienteEditForm = this.formBuilder.group({
      'nome' : [null, Validators.required],
      'cpf' : [null, Validators.required],
      'sexo' : [null, Validators.required],
      'email' : [null, Validators.required]
    })
  }

}



