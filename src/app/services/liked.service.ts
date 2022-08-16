import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthorizationService } from './authorization.service';

@Injectable({
  providedIn: 'root'
})
export class LikedService {

  constructor(private httpClient: HttpClient, private authorizationService: AuthorizationService) { }

  countLikesByPost(idPost: number) {
    return this.httpClient.get<number>(`${environment.apiUrl}/liked/count/${idPost}`,
      { headers: this.authorizationService.headersAuth() })
  }

  isLiked(idPost: number) {
    return this.httpClient.get<boolean>(`${environment.apiUrl}/liked/isLiked/${idPost}`,
      { headers: this.authorizationService.headersAuth() })
  }

}
