import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Posts.model';
import { AlertController } from '@ionic/angular';
import { FeedService } from 'src/app/services/feed.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss'],
})
export class FeedsComponent implements OnInit {

  posts: Post[];
  now: Date; 

  constructor(private alertctrl: AlertController, private feedService: FeedService) { }

  ngOnInit() { 
    this.now = new Date(Date.now())
    this.feedService.getPosts().subscribe(posts => {
      this.posts = posts
    })
  } 

  addLike(postId) {
    console.log('Post Liked')
  }

  showMore() {
    console.log(this.posts)
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
