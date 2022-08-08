import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthorizationService } from './authorization.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient, private authorizationService: AuthorizationService) { }

  createComment(comments: { comment: string, idPost: number }) {

    return this.httpClient.post(`${environment.apiUrl}/comments`, comments,
      { headers: this.authorizationService.headersAuth() });
  }
}
