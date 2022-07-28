import { Injectable } from '@angular/core';
import { AuthorizationService } from './authorization.service';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private authorization: AuthorizationService) { }

  login(login: { nickname: string, password: string }) {

    return this.authorization.getToken(login.nickname, login.password); 

  }

}
