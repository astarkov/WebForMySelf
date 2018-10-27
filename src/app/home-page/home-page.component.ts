import { Component, OnInit } from '@angular/core';
import {UserService} from '../user/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  users = [];
  test = '8888888';
  searchStr = "";



  constructor(private userService: UserService ) {}

  ngOnInit() {

    this.userService.getUsers()
      .subscribe(users => {
        console.log(users);
        return this.users = users;
      })

  }

}
