import { Component, Input, OnInit } from '@angular/core';
import { FollowService } from 'src/app/services/follow.service';
import { UserInfosComponent } from '../user-infos/user-infos.component';

@Component({
  selector: 'app-button-follow',
  templateUrl: './button-follow.component.html',
  styleUrls: ['./button-follow.component.css']
})
export class ButtonFollowComponent implements OnInit {

  constructor(private followService: FollowService, private user: UserInfosComponent) { }

  @Input()
  nickname: string

  isFollow: boolean;

  ngOnInit(): void {

    this.followService.isFollow(this.nickname).toPromise().then(bool => {
      this.isFollow = bool

    }).catch(err => {
      console.log(err);
    })

  }

  createFollow() {

    this.followService.create(this.nickname).toPromise().then(create => {

      this.isFollow = true
      // this.teste.followers + 1;

    }).catch(err => {
      console.log(err);
    })

  }

  async unFollow() {

    await this.followService.delete(this.nickname).toPromise().then(delet => {

      this.isFollow = false

      this.refreshCountFollow()

    }).catch(err => {
      console.log(err);
    })

  }

  async refreshCountFollow() {
    await this.user.countFollow()
  }

}
