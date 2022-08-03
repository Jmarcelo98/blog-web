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

  countPostsCreated(nickname: string) {
    return this.httpClient.get<FollowCount>(`${environment.apiUrl}/follower/count-follower/${nickname}`,
      { headers: this.authorizationService.headersAuth() })
  }

  getAllFollow(typeFollow: string, nickname: string) {
    let urlType = "all-" + typeFollow + "/" + nickname
    return this.httpClient.get<ModalFollow[]>(`${environment.apiUrl}/follower/${urlType}`,
      { headers: this.authorizationService.headersAuth() })
  }

}
