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

  @Input()
  postsCreated: number

  sizeListPost: number

  itensPerPage: number = 4

  posts: Post[]

  async ngOnInit() {

    await this.findAllByUser()
    
  }

  async findAllByUser() {
    await this.postService.findAllByUser(this.nickname, this.itensPerPage).toPromise().then(post => {

      this.posts = post
      this.sizeListPost = post.length

    }).catch(err => {
      console.log(err);
    })
  }

  async morePosts() {

    if (this.posts.length < this.postsCreated) {
      this.itensPerPage += 2;
      await this.findAllByUser()
    }

  }

}
