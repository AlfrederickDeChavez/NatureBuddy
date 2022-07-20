import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public username: string = '';
  constructor() { }

  ngOnInit() {
  }

  login() {
    console.log(this.username)
    this.username = '';
  } 

}
