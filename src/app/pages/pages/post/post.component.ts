import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService,
    private router: Router) { }

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
      if(err.status == 404) {
        this.router.navigate(['/nao-encontrado'])
      }
    })

  }

}
