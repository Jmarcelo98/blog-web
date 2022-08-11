import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';
import { Post } from '../models/post';
import { AuthorizationService } from './authorization.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient, private authorizationService: AuthorizationService) { }

  createPost(postInput: {
    content: string, description: string, title: string,
    thumbnail: any, isPublished: boolean, categoryForm: Category}) {

    console.log(postInput);
      
    return this.httpClient.post<number>(`${environment.apiUrl}/posts`, postInput,
      { headers: this.authorizationService.headersAuth() })
  }

  countPostsCreated(nickname: string) {
    return this.httpClient.get<number>(`${environment.apiUrl}/posts/count/${nickname}`,
      { headers: this.authorizationService.headersAuth() })
  }

  findById(id: number) {
    return this.httpClient.get<Post>(`${environment.apiUrl}/posts/${id}`,
      { headers: this.authorizationService.headersAuth() })
  }

  findAllByUser(nickname: string, itensPerPage: number) {
    return this.httpClient.get<Post[]>(`${environment.apiUrl}/posts/all/${nickname}`,
      {
        headers: this.authorizationService.headersAuth(),
        params: { pagina: 0, itensPerPage: itensPerPage }
      } ,
    )
  }

  getMostRecentPost() {
    return this.httpClient.get<Post[]>(`${environment.apiUrl}/posts/most-recent`)
  }

}
