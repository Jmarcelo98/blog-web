import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { UserNicknameAndPicture } from 'src/app/models/userNicknameAndPicture';
import { FollowService } from 'src/app/services/follow.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private postService: PostService, private followService: FollowService) { }

  postsMostRecent: Post[]

  usersMostFollows: UserNicknameAndPicture[]

  async ngOnInit() {

    await this.getPostsMostRecent()

    await this.getMostFollowsUsers()

  }

  async getPostsMostRecent() {

    this.postService.getMostRecentPost().toPromise().then( posts=> {

      this.postsMostRecent = posts;

    }).catch(err => {
      console.log(err);
    })

  }

  async getMostFollowsUsers() {

    this.followService.getMostFollowsUsers().toPromise().then(users => {
      this.usersMostFollows = users
    }).catch( err => {
      console.log(err);
      
    })
  }

}
