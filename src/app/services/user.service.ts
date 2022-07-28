import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  createUser(login: { nickname: string, password: string }) {
    return this.httpClient.post(`${environment.apiUrl}/users`, login)
  }

}
