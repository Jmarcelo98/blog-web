import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css']
})
export class FormCadastroComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private userService: UserService,
    private loginService: LoginService, private authorizationService: AuthorizationService,
    private router: Router, private snackBar: MatSnackBar) { }

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

    if (senha1 !== senha2) {
      this.singUpForm.controls['confirmPassword'].setErrors({ notEqual: true })
      return false;
    }

    return true;
  }

  async singUp() {

    this.singUpForm.markAllAsTouched()

    if (this.singUpForm.valid && this.passwordValidator()) {

      let infosUsers = { "nickname": this.singUpForm.value.nickname, "password": this.singUpForm.value.password }

      await this.userService.createUser(infosUsers).toPromise().then(su => {

        this.loginAfterSingUp(infosUsers);


      }).catch(err => {

        if (err.status == 400) {

          this.snackBar.open('Usuário já cadastrado!', '', {
            duration: 4000,
            verticalPosition: 'top',
            panelClass: ['red-snackbar']
          });
          

        }

      })


    }

  }

  async loginAfterSingUp(loginInfos: any) {

    this.loginService.login(loginInfos).toPromise().then(jwt => {

      this.authorizationService.setAccessToken(jwt);
      this.router.navigate(['']);

    })

  }

}
