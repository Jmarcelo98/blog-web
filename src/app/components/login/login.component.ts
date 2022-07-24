import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = this.formBuilder.group({
    nickname: [null, [Validators.required]],
    password: [null, Validators.required]
  })

  hide: boolean = true;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  entrar() {

  }

  hideShow(event: any) {
    if (event.pointerType === 'mouse') {
      this.hide = !this.hide;
    }
  }

}
