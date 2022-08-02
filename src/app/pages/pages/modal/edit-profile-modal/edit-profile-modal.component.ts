import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private sanitizer: DomSanitizer, private formBuilder: FormBuilder, private snackBar: MatSnackBar) { }

  userLogged: User = new User();

  defaultImage: string;

  image: any;

  formUpdate = this.formBuilder.group({});

  async ngOnInit() {

    await this.getInfosUserLogged();

    await this.getImage();

    this.formUpdate = this.formBuilder.group({
      profilePicture: [this.userLogged.profilePicture],
      urlLinkedin: [this.userLogged.urlLinkedin],
      urlInstagram: [this.userLogged.urlInstagram],
      urlWebSite: [this.userLogged.urlWebSite],
      biography: [this.userLogged.biography]
    })

  }

  async update() {

    await this.userService.updateUser(this.formUpdate.value).toPromise().then( sucesso => {
      
      this.snackBar.open('Usuário atualizado com sucesso!', '', {
        duration: 4000,
        verticalPosition: 'top',
        panelClass: ['blue-snackbar']
      });

      this.closeModal()
      
    }).catch (err => {
      console.log(err);
    })

  }

  async updateProfilePictureView() {

    this.userLogged.profilePicture = this.formUpdate.get('profilePicture')?.value

    this.getImage()

  }

  uploadProfilePicture(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0] as File;
      const reader = new FileReader()
      reader.onload = (e: any) => {
        const bytes = e.target.result.split('base64,')[1]
        this.formUpdate.controls['profilePicture'].setValue(bytes)
        this.updateProfilePictureView()
      }
      reader.readAsDataURL(file)
    }
  }

  async getInfosUserLogged() {

    await this.userService.getInfosUserLogged().toPromise().then((user) => {
      this.userLogged = user;
    }).catch(err => {
      console.log(err);
    })

  }

  // buscar imagem do usuario
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
