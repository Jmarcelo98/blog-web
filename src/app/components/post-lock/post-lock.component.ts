import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-lock',
  templateUrl: './post-lock.component.html',
  styleUrls: ['./post-lock.component.css']
})
export class PostLockComponent implements OnInit {

  constructor(private postService: PostService, private snackBar: MatSnackBar) { }

  @Input()
  postsLocks: Post[]

  ngOnInit(): void {
  }

  publish(item: Post, index: number) {
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

}
