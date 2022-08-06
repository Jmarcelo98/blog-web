import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-comment',
  templateUrl: './user-comment.component.html',
  styleUrls: ['./user-comment.component.css']
})
export class UserCommentComponent implements OnInit {

  constructor(private domSanitizer: DomSanitizer) { }

  @Input()
  user: User

  async ngOnInit() {

    await this.getImage()

  }

  async getImage() {

    if (this.user.profilePicture == null) {
      this.user.profilePicture = "../../../../assets/img/default.png";
    } else {
      let objectURL = 'data:image/png;base64,' + this.user.profilePicture;
      this.user.profilePicture = this.domSanitizer.bypassSecurityTrustUrl(objectURL);
    }

  }
}
