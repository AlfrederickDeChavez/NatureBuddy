import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  public username: string = '';
  
  constructor(private userService: UserService, private socket: Socket) { }

  ngOnInit() {
  }

  login() {
    this.socket.emit('login', this.username) 
    this.socket.on('user-joined', data => {
      this.userService.setMyUserInformation(data)
    })
  } 
}
