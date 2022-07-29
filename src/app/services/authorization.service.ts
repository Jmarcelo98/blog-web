import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { environment } from 'src/environments/environment';
import { NicknameUserLogged } from '../models/nickname-user-logged';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AuthorizationService {

  private readonly ACCESS_TOKEN = 'access_token';

  constructor(private http: HttpClient, @Inject(LOCAL_STORAGE) private storage: StorageService,
    private jwtHelperService: JwtHelperService) { }

  getToken(nickname: string, password: string) {

    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });

    return this.http.post(`${environment.apiUrl}/login`, { nickname, password }, { headers: reqHeader, responseType: 'text' });
  }

  setAccessToken(token: string) {
    localStorage.setItem(this.ACCESS_TOKEN, token);
  }

  getAccessToken(): string {
    return localStorage.getItem(this.ACCESS_TOKEN) || '';
  }

  isTokenExpired(): boolean {

    if (!this.getAccessToken()) {
      return true;
    }
    
    return this.jwtHelperService.isTokenExpired(this.getAccessToken());
  }

  getLoggedUser(): NicknameUserLogged {
    let accessToken = this.getAccessToken();

    if (!accessToken) {
      return null!;
    }
    const decodedToken = this.jwtHelperService.decodeToken(accessToken);

    return {
      sub: decodedToken.sub,
    };
  }

}
