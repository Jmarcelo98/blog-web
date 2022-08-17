import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-post-lock',
  templateUrl: './post-lock.component.html',
  styleUrls: ['./post-lock.component.css']
})
export class PostLockComponent implements OnInit {

  constructor(private postService: PostService, private snackBar: MatSnackBar, private dialog: MatDialog) { }

  @Input()
  postsLocks: Post[]

  ngOnInit(): void {
  }

  publish(item: Post, index: number) {

    // this.dialog.open(ConfirmDialogComponent).afterClosed().subscribe(confirm => {

    //   if (confirm) {

    //     this.postService.publish(item.id).subscribe(suc => {

    //       this.postsLocks.splice(index, 1);

    //       this.snackBar.open('Post publicado com sucesso!', '', {
    //         duration: 2000,
    //         verticalPosition: 'top',
    //         panelClass: ['green-snackbar'],
    //       });

    //     }, err => {
    //       console.log(err);
    //     })

    //   }
    // })

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    });

    dialogRef.componentInstance.textTitle = "Deseja publicar este post agora?"

    dialogRef.afterClosed().subscribe(confirm => {

      if (confirm) {

        this.postService.publish(item.id).subscribe(suc => {

          this.postsLocks.splice(index, 1);

          this.snackBar.open('Post publicado com sucesso!', '', {
            duration: 2000,
            verticalPosition: 'top',
            panelClass: ['green-snackbar'],
          });

        }, err => {
          console.log(err);
        })

      }

    })
  }
}