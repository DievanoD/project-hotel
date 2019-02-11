import { Component, OnInit, Input } from '@angular/core';
import { Route, Router } from '../../../../../node_modules/@angular/router';
import { ClienteApiService } from '../../../service/cliente-api.service';
import { FormGroup, FormBuilder, NgForm, Validators } from '../../../../../node_modules/@angular/forms';
import { Cliente } from '../../../shared/Cliente';

@Component({
  selector: 'app-cliente-add',
  templateUrl: './cliente-add.component.html',
  styleUrls: ['./cliente-add.component.css']
})
export class ClienteAddComponent implements OnInit {

    @Input() cliente = new Cliente;
  clienteForm: FormGroup;

  codCliente: number;
  cpf: string = '';
  nome: string = '';
  sexo: number;
  email: string = '';
 
  //tipoCliente: TipoCliente[] = [];

  isLoadingResults = false;

  constructor(private api: ClienteApiService, private router: Router, private formBuilder: FormBuilder) { }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    
    const { codCliente, cpf, nome, sexo, email} = this.clienteForm.value;
    this.cliente = new Cliente();
    this.cliente.codigo = codCliente;
    this.cliente.cpf = cpf;
    this.cliente.nome = nome;
    this.cliente.sexo = sexo;
    this.cliente.email = email;



  
    this.api.addCliente(this.cliente)
      .subscribe(res => {
          console.log(res);
          // let id = res['codCliente'];
          this.isLoadingResults = false;
          // this.router.navigate(['/cliente-details', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
    }

  addCliente(){
    this.api.addCliente(this.cliente).subscribe((resultado) => {
      this.router.navigate['/cliente'];
    }, (err) => {
      console.log(err);
    });
  }

 


  ngOnInit() {
    
    this.clienteForm = this.formBuilder.group({
      'codCliente' : [null, Validators.required],
      'cpf' : [null, Validators.required],
      'nome' : [null, Validators.required],
      'sexo' : [null, Validators.required],
      'email' : [null, Validators.required]

    });
  }

}

 
