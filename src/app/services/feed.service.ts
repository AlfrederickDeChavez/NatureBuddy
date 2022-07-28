import { Injectable } from '@angular/core';
import { Post } from 'src/app/models/Posts.model';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  //This is the storage of posts created.
  posts: Post[] = []

  //Creating instance of socket
  constructor(private socket: Socket) { }


  //Returns posts created.
  getPosts(){
    this.socket.on('receive-post', post => {
      this.posts.push(post)
    })
    
    return new Observable<Post[]>(subscriber => {
      subscriber.next(this.posts)
    })
  }

  //Sending the post to the server
  addPost(post) {
    this.socket.emit('post-action', post)
  }
}
