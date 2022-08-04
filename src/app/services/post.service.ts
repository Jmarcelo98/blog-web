import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post';
import { AuthorizationService } from './authorization.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient, private authorizationService: AuthorizationService) { }

  countPostsCreated(nickname: string) {
    return this.httpClient.get<number>(`${environment.apiUrl}/posts/count/${nickname}`,
      { headers: this.authorizationService.headersAuth() })
  }

  findAllByUser(nickname: string, itensPerPage: number) {
    return this.httpClient.get<Post[]>(`${environment.apiUrl}/posts/${nickname}`,
      { headers: this.authorizationService.headersAuth(),
         params: { pagina: 0, itensPerPage: itensPerPage } } ,
    )
  }

}
