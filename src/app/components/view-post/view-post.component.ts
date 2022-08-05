import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) { }

  post: Post = new Post()

  idPost: number

  async ngOnInit() {

    this.idPost = Number(this.activatedRoute.snapshot.paramMap.get('id'))

    await this.findById();

  }

  async findById() {

    this.postService.findById(this.idPost).toPromise().then(pst => {

      this.post = pst

    }).catch(err => {
      console.log(err)
    })

  }

}
