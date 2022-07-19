import { Component, OnInit } from '@angular/core';
import { POSTS } from 'src/app/models/mock-posts';
import { Post } from 'src/app/models/Posts.model';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss'],
})
export class FeedsComponent implements OnInit {

  posts: Post[] = POSTS
  now: Date;

  constructor() { }

  ngOnInit() { 
    this.now = new Date()
  }

  addLike(postId) {
    let likedClick: boolean = this.posts[postId - 1].isLiked;
    if(this.posts[postId - 1].isLiked) {
      if (likedClick) {
        this.posts[postId - 1].likes = this.posts[postId - 1].likes - 1
      }
      this.posts[postId - 1].isLiked = !this.posts[postId - 1].isLiked
      return
    } else {
        this.posts[postId - 1].likes = this.posts[postId - 1].likes + 1
        this.posts[postId - 1].isLiked = !this.posts[postId - 1].isLiked 
    }
    
  }

  donate() {
    console.log('Donate Button Works ... ')
  }

}
