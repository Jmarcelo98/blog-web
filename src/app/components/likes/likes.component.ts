import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { LikedService } from 'src/app/services/liked.service';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {

  constructor(private likedService: LikedService, private authorizationService: AuthorizationService) { }

  @Input()
  post: Post

  isLiked: boolean

  isSameUser: boolean

  countLikes: number

  async ngOnInit() {

    await this.isLikedByPost()

    await this.countLikesByPost()

  }

  async countLikesByPost() {
    this.likedService.countLikesByPost(this.post.id).toPromise().then(value => {
      this.countLikes = value
    }).catch(err => {
      console.log(err);
    })
  }

  async isLikedByPost() {
    this.likedService.isLiked(this.post.id).toPromise().then(value => {
      this.isLiked = value
    }).catch(err => {
      console.log(err);
    })
  }

  isSamePostUser(): boolean {

    if (this.post.user.nickname == this.authorizationService.getLoggedUser().sub) {
      return true;
    }
    return false;
  }

  like() {

    this.likedService.create(this.post.id).subscribe(suc => {

      this.countLikes += 1;
      this.isLiked = true

    }, err => {
      console.log(err);
    })

  }

  unlike() {

    this.likedService.delete(this.post.id).subscribe(suc => {

      this.countLikes -= 1;
      this.isLiked = false

    }, err => {
      console.log(err);
    })

  }

}
