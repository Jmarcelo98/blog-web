import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FollowModalComponent } from '../../modal/follow-modal/follow-modal.component';

@Component({
  selector: 'app-following-infos',
  templateUrl: './following-infos.component.html',
  styleUrls: ['./following-infos.component.css']
})
export class FollowingInfosComponent implements OnInit{

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.openModal()
  }

  @Input()
  following: number

  @Input()
  nickname: string

  openModal() {
    const dialogRef = this.dialog.open(FollowModalComponent,
      { disableClose: false, width: '25em' }
    )
    dialogRef.componentInstance.nickname = this.nickname;
    dialogRef.componentInstance.typeFollow = "following"
  }

}
