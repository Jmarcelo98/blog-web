import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ModalFollow } from 'src/app/models/modalFollow';
import { FollowService } from 'src/app/services/follow.service';

@Component({
  selector: 'app-follow-modal',
  templateUrl: './follow-modal.component.html',
  styleUrls: ['./follow-modal.component.css']
})
export class FollowModalComponent implements OnInit {

  constructor(private followService: FollowService, private domSanitizer: DomSanitizer, private router: Router,
    private dialogRef: MatDialogRef<FollowModalComponent>) { }

  nickname: string

  typeFollow: string

  titleType: string

  modalFollow: ModalFollow[];

  isValueBiggerThenZero: boolean


  async ngOnInit() {

    if (this.typeFollow == "following") {
      this.titleType = "Seguindo"
    } else {
      this.titleType = "Seguidores"

    }

    await this.getAllFollowing()

    await this.getImage()

  }

  redirectUser(nickname: string) {

    this.router.navigate(['/' + nickname])
      .then(() => {
        window.location.reload();
      });
      
    this.closeModal()
  }


  async getAllFollowing() {

    await this.followService.getAllFollow(this.typeFollow, this.nickname).toPromise().then(value => {
        this.modalFollow = value

        if(this.modalFollow.length > 0) {
          this.isValueBiggerThenZero = true
        } else {
          this.isValueBiggerThenZero = false
        }
       

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


  closeModal() {
    this.dialogRef.close();
  }

}
