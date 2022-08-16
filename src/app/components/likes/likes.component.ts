import { Component, Input, OnInit } from '@angular/core';
import { LikedService } from 'src/app/services/liked.service';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {

  constructor(private likedService: LikedService) { }

  @Input()
  idPost: number

  isLiked: boolean

  countLikes: number

  async ngOnInit() {

    await this.countLikesByPost()

    await this.isLikedByPost()

  }

  async countLikesByPost() {
    this.likedService.countLikesByPost(this.idPost).toPromise().then( value => {
      this.countLikes = value
    }).catch( err => {
      console.log(err);
    })
  }
  
  async isLikedByPost() {
    this.likedService.isLiked(this.idPost).toPromise().then( value => {
      console.log(value);
      
      this.isLiked = value
    }).catch( err => {
      console.log(err);
    })
  }

  like() {
    this.countLikes += 1;
    this.isLiked = false
  } 

  unlike() {
    this.countLikes -= 1;
    this.isLiked = true
  }

}
