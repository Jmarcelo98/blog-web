import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-categories',
  templateUrl: './post-categories.component.html',
  styleUrls: ['./post-categories.component.css']
})
export class PostCategoriesComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) { }

  posts: Post[]

  category = this.activatedRoute.snapshot.paramMap.get('category')

  async ngOnInit() {

    await this.getPostsByCategory();

  }

  async getPostsByCategory() {

    this.postService.findAllByCategoryPublished(this.category!).toPromise().then( suc => {

      this.posts = suc

    }).catch( err => {
      console.log(err);
    })

  }

}
