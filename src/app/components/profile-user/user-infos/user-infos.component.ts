import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FollowCount } from 'src/app/models/followCount';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { FollowService } from 'src/app/services/follow.service';
import { PostService } from 'src/app/services/post.service';
import { EditProfileModalComponent } from '../../modal/edit-profile-modal/edit-profile-modal.component';

@Component({
  selector: 'app-user-infos',
  templateUrl: './user-infos.component.html',
  styleUrls: ['./user-infos.component.css']
})
export class UserInfosComponent implements OnInit {

  @Input()
  user: User

  @Input()
  image: any

  countPostsCreated: number

  followCount: FollowCount = new FollowCount()

  sizeListPost: number

  itensPerPage: number = 4

  posts: Post[]

  constructor(private authorizationService: AuthorizationService, private dialog: MatDialog,
    private postService: PostService, private followService: FollowService) { }

  async ngOnInit() {

    await this.countPosts()

    await this.countFollow()

    await this.findAllByUser()

  }

  async countFollow() {

    await this.followService.countFollows(this.user.nickname).toPromise().then(value => {
      this.followCount = value;
    }).catch(err => {
      console.log(err);
    })

  }

  async countPosts() {

    await this.postService.countPostsCreated(this.user.nickname).toPromise().then(count => {

      this.countPostsCreated = count;

    }).catch(err => {

      console.log(err);

    })

  }


  async openDialog() {
    const dialogRef = this.dialog.open(EditProfileModalComponent,
      { disableClose: true, width: '50em' }
    )
    dialogRef.componentInstance.user = this.user
  }


  urlUserIsSameUserLogged(): boolean {

    if (this.user.nickname == this.authorizationService.getLoggedUser().sub) {
      return true;
    }

    return false;

  }


  async findAllByUser() {
    await this.postService.findAllByUser(this.user.nickname, this.itensPerPage).toPromise().then(post => {

      this.posts = post
      this.sizeListPost = post.length

    }).catch(err => {
      console.log(err);
    })
  }


  async morePosts() {

    if (this.posts.length < this.countPostsCreated) {
      this.itensPerPage += 2;
      await this.findAllByUser()
    }

  }


}
