import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    nickname: [null, [Validators.required]],
    password: [null, Validators.required]
  })

  hide: boolean = true;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService,
    private authorizationService: AuthorizationService, private router: Router) { }

  ngOnInit(): void {
  }

  async login() {

    this.loginForm.markAllAsTouched();
    
    this.loginService.login(this.loginForm.value).subscribe(jwt => {
       this.authorizationService.setAccessToken(jwt);
      this, this.router.navigate(['']);
    }, (error) => {
      console.log(error);

      if (error.status == 400) {
        console.log("error 400");
      }

    })

  }


}