import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-locked',
  templateUrl: './post-locked.component.html',
  styleUrls: ['./post-locked.component.css']
})
export class PostLockedComponent implements OnInit {

  constructor(private postService: PostService) { }

  postsLocks: Post[]

  itensPerPage: number = 4

  async ngOnInit() {

    await this.findAllByUserNotPublished()

  }

  async findAllByUserNotPublished() {
    this.postService.findAllByUserNotPublished(this.itensPerPage).toPromise().then( suc => {
      this.postsLocks = suc
    }).catch( err => {
      console.log(err);
    })
  }

}
