import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalFollow } from 'src/app/models/modalFollow';
import { FollowService } from 'src/app/services/follow.service';

@Component({
  selector: 'app-follow-modal',
  templateUrl: './follow-modal.component.html',
  styleUrls: ['./follow-modal.component.css']
})
export class FollowModalComponent implements OnInit {

  constructor(private followService: FollowService, private domSanitizer: DomSanitizer) { }

  nickname: string
  
  typeFollow: string

  titleType: string

  modalFollow: ModalFollow[];

  async ngOnInit() {

    if (this.typeFollow == "following") {
      this.titleType = "Seguindo"
    } else {
      this.titleType = "Seguidores"
    }

    await this.getAllFollowing()

    await this.getImage()

  }


  async getAllFollowing() {

    await this.followService.getAllFollow(this.typeFollow, this.nickname).toPromise().then(value => {

      this.modalFollow = value 

    }).catch(err => {
      console.log(err);

    })

  }

  async getImage() {

    let image;

    for (let index = 0; index < this.modalFollow.length; index++) {

      const element = this.modalFollow[index];

      if (element.profilePicture == null) {
        image = "../../../../assets/img/default.png"
      } else {
        let objectURL = 'data:image/png;base64,' + element.profilePicture;
        image = this.domSanitizer.bypassSecurityTrustUrl(objectURL);
      }

      element.profilePicture = image;
      
    }

  }

}
