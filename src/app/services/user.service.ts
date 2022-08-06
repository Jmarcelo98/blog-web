import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { AuthorizationService } from './authorization.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, private authorizationService: AuthorizationService) { }

  createUser(login: { nickname: string, password: string }) {
    return this.httpClient.post(`${environment.apiUrl}/users`, login);
  }

  updateUser(formUpdate: {
    profilePicture: string[], urlLinkedin:
    string, urlInstagram: string, urlWebSite: string, biography: string
  }) {

    return this.httpClient.patch(`${environment.apiUrl}/users`, formUpdate,
      { headers: this.authorizationService.headersAuth() });
  }

  getInfosUserPageUrl(nickname: string) {
    return this.httpClient.get<User>(`${environment.apiUrl}/users/${nickname}`,
      { headers: this.authorizationService.headersAuth() })
  }

}
