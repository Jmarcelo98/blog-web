import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css']
})
export class FormCadastroComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  singUpForm = this.formBuilder.group({
    nickname: [null, [Validators.required]],
    password: [null, [Validators.required]],
    confirmPassword: [null, [Validators.required]]
  })


  hide: boolean = true;

  ngOnInit(): void {
  }

  passwordValidator() {
    let senha1 = this.singUpForm.get('password')?.value;
    let senha2 = this.singUpForm.get('confirmPassword')?.value;

    if(senha1 !== senha2 ) {
      this.singUpForm.controls['confirmPassword'].setErrors({notEqual: true})
      // this.singUpForm.setErrors({notEqual: true})
      return false;
    }

    return true;
    // if (senha1?.value !== senha2.value) {
    //   senha2.setErrors({ notEquals: true });
    // } else {
    //   const errors = senha2.errors;

    //   if (errors) {
    //     delete errors.notEquals;
    //     senha2.setErrors(errors);
    //   }
    // }
  }

  singUp() {

    this.singUpForm.markAllAsTouched()

    if (this.singUpForm.valid && this.passwordValidator()) {
      alert('sucesso')

    }

  }

}
