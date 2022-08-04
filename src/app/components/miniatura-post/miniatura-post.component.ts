import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-miniatura-post',
  templateUrl: './miniatura-post.component.html',
  styleUrls: ['./miniatura-post.component.css']
})
export class MiniaturaPostComponent implements OnInit {

  constructor(private postService: PostService) { }

  @Input()
  nickname: string

  posts: Post[]

  async ngOnInit() {

    await this.postService.findAllByUser(this.nickname, 0).toPromise().then(post => {

      this.posts = post

    }).catch(err => {
      console.log(err);
    })
    
  }

}
