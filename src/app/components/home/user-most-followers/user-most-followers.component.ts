import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserNicknameAndPicture } from 'src/app/models/userNicknameAndPicture';

@Component({
  selector: 'app-user-most-followers',
  templateUrl: './user-most-followers.component.html',
  styleUrls: ['./user-most-followers.component.css']
})
export class UserMostFollowersComponent implements OnInit {

  constructor(private router: Router, private domSanitizer: DomSanitizer) { }

  @Input()
  userNicknameAndPicture: UserNicknameAndPicture[]

  async ngOnInit() {
    this.getImage()
  }

  async getImage() {

    let image;

    for (let index = 0; index < this.userNicknameAndPicture.length; index++) {

      const element = this.userNicknameAndPicture[index];

      if (element.profilePicture == null) {
        image = "../../../../assets/img/default.png"
      } else {
        let objectURL = 'data:image/png;base64,' + element.profilePicture;
        image = this.domSanitizer.bypassSecurityTrustUrl(objectURL);
      }

      element.profilePicture = image;

    }

  }

  redirectUser(nickname: string) {

    this.router.navigate(['/usuario/' + nickname])
    // this.router.navigate(['/' + nickname])
    //   .then(() => {
    //     window.location.reload();
    //   });
  }


}
