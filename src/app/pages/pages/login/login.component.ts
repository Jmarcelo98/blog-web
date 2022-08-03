import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { LoginService } from 'src/app/services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    nickname: [null, [Validators.required]],
    password: [null, [Validators.required]]
  })

  hide: boolean = true;
  badRequest: boolean = false;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService,
    private authorizationService: AuthorizationService, private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  async login() {

    this.loginForm.markAllAsTouched();

    if (this.loginForm.valid) {

      this.loginService.login(this.loginForm.value).subscribe(jwt => {
        this.authorizationService.setAccessToken(jwt);

        this.router.navigate([''])
          .then(() => {
            window.location.reload();
          });

      }, (error) => {

        if (error.status == 403) {
          this.snackBar.open('Usuário ou senha incorreto!', '', {
            duration: 4000,
            verticalPosition: 'top',
            panelClass: ['red-snackbar']
          });

        }

      })

    }

  }


}