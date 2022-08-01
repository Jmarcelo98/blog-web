import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-profile-modal',
  templateUrl: './edit-profile-modal.component.html',
  styleUrls: ['./edit-profile-modal.component.css']
})
export class EditProfileModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditProfileModalComponent>, private userService: UserService,
    private sanitizer: DomSanitizer, private formBuilder: FormBuilder) { }

  userLogged: User = new User();

  defaultImage: string;

  image: any;

  formUpdate = this.formBuilder.group({});

  async ngOnInit() {

    await this.getInfosUserLogged();

    await this.getImage();

    this.formUpdate = this.formBuilder.group({
      urlLinkedin: [this.userLogged.urlLinkedin],
      urlInstagram: [this.userLogged.urlInstagram],
      urlWebSite: [this.userLogged.urlWebSite],
      biography: [this.userLogged.biography]
    })

  }

  async update() {

  }

  async getInfosUserLogged() {

    await this.userService.getInfosUserLogged().toPromise().then((user) => {
      this.userLogged = user;
    }).catch(err => {
      console.log(err);
    })

  }

  async getImage() {

    this.defaultImage = "../../../../../assets/img/default.png"

    if (this.userLogged.profilePicture == null) {
      this.image = this.defaultImage
    } else {
      let objectURL = 'data:image/png;base64,' + this.userLogged.profilePicture;
      this.image = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    }

  }

  closeModal() {
    this.dialogRef.close();
  }

}
