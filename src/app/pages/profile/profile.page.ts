import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  username: string = ''
  showFollowers: boolean = true;
  showFollowing: boolean = false

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getMyUserInformation().subscribe(username => {
      this.username = username
    })
  }

  toggleFollowers() {
    this.showFollowers = true
    this.showFollowing = false
  }

  toggleFollowing() {
    this.showFollowing = true
    this.showFollowers = false
  }

}
