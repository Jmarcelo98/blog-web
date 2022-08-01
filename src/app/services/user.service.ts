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
    return this.httpClient.post(`${environment.apiUrl}/users`, login);
  }

  updateUser(formUpdate : {profilePicture: string[], urlLinkedin: 
    string, urlInstagram: string, urlWebSite: string, 
    biography: string}) {

    return this.httpClient.patch(`${environment.apiUrl}/users`, formUpdate);
  }

  getInfosUserLogged(){
    return this.httpClient.get<User>(`${environment.apiUrl}/users`)
  }

  getInfosUserPageUrl(nickname: string){
    return this.httpClient.get<User>(`${environment.apiUrl}/users/${nickname}`)
  }

}
