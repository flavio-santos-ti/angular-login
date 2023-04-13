import { RequestLoginModel } from './../../models/request.login.model';
import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { minusculoValidator } from '../../validators/minusculoValidator';

import { MessageService } from 'primeng/api';
import { MatDialog } from '@angular/material/dialog';

import { LoginService } from 'src/app/services/login.service';
import { ErrorDialogComponent } from 'src/app/dialogs/error-dialog/error-dialog.component';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent {

  public requestLogin!: RequestLoginModel;

  hide = true;

  formulario!: FormGroup;
  constructor(private messageService: MessageService, private formBuilder: FormBuilder, private LoginService: LoginService, public dialog: MatDialog, private router: Router ) {}

  ngOnInit(): void {
    this.createForm();

  }

  createForm() {
    this.formulario = this.formBuilder.group({
      login: ['', [Validators.required, Validators.email, minusculoValidator]],
      senha: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  get login() { return this.formulario.get('login'); }
  get senha() { return this.formulario.get('senha'); }

  public Autentica(): void {

    this.LoginService.Autenticar(this.formulario.value).subscribe({
      next: response => {
        console.log("??????" + response.data.login);
        this.router.navigate(['/home']);
      },
      error: erro => {
        //console.log("Erro ?? "+ erro.error.message );
        this.onError(erro.error.message);

      }
    });
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }


}
