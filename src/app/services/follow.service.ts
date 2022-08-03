import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ModalFollow } from '../models/modalFollow';
import { FollowCount } from '../models/followCount';
import { AuthorizationService } from './authorization.service';

@Injectable({
  providedIn: 'root'
})
export class FollowService {

  constructor(private httpClient: HttpClient, private authorizationService: AuthorizationService) { }

  create(nickname: string) {
    return this.httpClient.post(`${environment.apiUrl}/follower/${nickname}`,
      { headers: this.authorizationService.headersAuth() })
  }

  delete(nickname: string) {
    return this.httpClient.delete(`${environment.apiUrl}/follower/${nickname}`,
      { headers: this.authorizationService.headersAuth() })
  }

  countFollows(nickname: string) {
    return this.httpClient.get<FollowCount>(`${environment.apiUrl}/follower/count-follower/${nickname}`,
      { headers: this.authorizationService.headersAuth() })
  }

  getAllFollow(typeFollow: string, nickname: string) {
    let urlType = "all-" + typeFollow + "/" + nickname
    return this.httpClient.get<ModalFollow[]>(`${environment.apiUrl}/follower/${urlType}`,
      { headers: this.authorizationService.headersAuth() })
  }

  isFollow(nickname: string) {
    return this.httpClient.get<boolean>(`${environment.apiUrl}/follower/isFollow/${nickname}`,
      { headers: this.authorizationService.headersAuth() })
  }

}
