import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  username: string;
  constructor() { }

  //Submit user information to the server. 
  setMyUserInformation(username) {
    this.username = username
  }

  getMyUserInformation(){
    return new Observable<string>(subscriber => {
      subscriber.next(this.username)
    })
  }
}
