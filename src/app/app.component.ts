import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private socket: Socket, private userService: UserService) {}

  ngOnInit(){
    this.socket.connect();
  }
}
