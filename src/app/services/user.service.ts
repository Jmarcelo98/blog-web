import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  createUser(login: { nickname: string, password: string }) {
    return this.httpClient.post(`${environment.apiUrl}/users`, login)
  }

  getInfosUserLogged(){
    return this.httpClient.get<User>(`${environment.apiUrl}/users`)
  }

  getInfosUserPageUrl(nickname: string){
    return this.httpClient.get<User>(`${environment.apiUrl}/users/${nickname}`)
  }

}
