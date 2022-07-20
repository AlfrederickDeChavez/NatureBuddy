import { Component, OnInit } from '@angular/core';
import { POSTS } from 'src/app/models/mock-posts';
import { Post } from 'src/app/models/Posts.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss'],
})
export class FeedsComponent implements OnInit {

  posts: Post[] = POSTS
  now: Date;

  constructor(private alertctrl: AlertController) { }

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

  async donate() {
    let alert = await this.alertctrl.create({
      
      inputs: [
        {
          name: 'amount',
          placeholder: 'Enter amount',
          type: 'number'
        },
      
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Confirm',
          handler: data => {

            if (!data.amount) {
              return false
            }
            
            console.log(data.amount)
          }
        }
      ]

    });

    await alert.present()
  }

}
