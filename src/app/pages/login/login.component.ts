import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { minusculoValidator } from '../../validators/minusculoValidator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  hide = true;

  formulario!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, minusculoValidator]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get email() { return this.formulario.get('email'); }
  get senha() { return this.formulario.get('senha'); }

}
