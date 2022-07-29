import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { EditProfileModalComponent } from 'src/app/pages/pages/modal/edit-profile-modal/edit-profile-modal.component';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;

  ngOnInit(): void {
    this.openDialog()
  }

  openDialog() {
    const dialogRef = this.dialog.open(EditProfileModalComponent, 
      { disableClose: true, height: '75%', width: '60%' }
      )
  }

}
