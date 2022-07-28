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

}
