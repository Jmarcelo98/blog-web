import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
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

}
