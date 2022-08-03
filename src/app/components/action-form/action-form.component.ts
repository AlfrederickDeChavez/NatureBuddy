import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FeedService } from 'src/app/services/feed.service';
import { Socket } from 'ngx-socket-io';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-action-form',
  templateUrl: './action-form.component.html',
  styleUrls: ['./action-form.component.scss'],
})
export class ActionFormComponent implements OnInit {

  constructor(private modalCtrl: ModalController, private feedService: FeedService, private socket: Socket, private userService: UserService) { }

  public post = {
    author: '',
    caption: '', 
    date: new Date(Date.now()).getHours() > 12 ? new Date(Date.now()).getHours() - 12 + ':' + new Date(Date.now()).getMinutes() + ' pm': new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes() + ' am',
    image: '',
    likes: 0,
    comment: '',
    isLiked: false,
  }

  ngOnInit() {
    this.userService.getMyUserInformation().subscribe(username => {
      this.post.author = username
    })
  } 

  cancel() {
    this.modalCtrl.dismiss()
  }

  postContent() {
    this.feedService.addPost(this.post)
    this.modalCtrl.dismiss()
  }

  addPhoto() {
    console.log('Photgxcfhhfg.')
  }

}
