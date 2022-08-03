import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {

  people: any[] = [
    {},
    {},
    {}
  ]
  constructor(private socket: Socket) { }

  ngOnInit() {
    this.socket.on('message', message => {
      console.log(message)
    })
  }
 
}
