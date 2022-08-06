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

  constructor(private userService: UserService,
    private formBuilder: FormBuilder, private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<EditProfileModalComponent>,
    private domSanitizer: DomSanitizer) { }

  user: User = new User();

  image: any

  formUpdate = this.formBuilder.group({});

  async ngOnInit() {

    this.formUpdate = this.formBuilder.group({
      profilePicture: [this.user.profilePicture],
    })

    this.image = this.user.profilePicture

  }

  async update() {

    this.formUpdate = this.formBuilder.group({
      profilePicture: [this.user.profilePicture],
      urlLinkedin: [this.user.urlLinkedin],
      urlInstagram: [this.user.urlInstagram],
      urlWebSite: [this.user.urlWebSite],
      biography: [this.user.biography]
    })

    await this.userService.updateUser(this.formUpdate.value).toPromise().then(sucesso => {

      // this.snackBar.open('Usuário atualizado com sucesso!', '', {
      //   duration: 2000,
      //   verticalPosition: 'top',
      //   panelClass: ['blue-snackbar']
      // });

      window.location.reload()

    }).catch(err => {
      console.log(err);
    })

  }

  async updateProfilePictureView() {
    this.user.profilePicture = this.formUpdate.get('profilePicture')?.value
    await this.updateImageInForm()
  }

  async updateImageInForm() {
    let objectURL = 'data:image/png;base64,' + this.user.profilePicture;
    this.image = this.domSanitizer.bypassSecurityTrustUrl(objectURL);
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

  closeModal() {
    this.dialogRef.close();
  }


}
