import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  username: string = ''
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getMyUserInformation().subscribe(username => {
      this.username = username
    })
  }

}
