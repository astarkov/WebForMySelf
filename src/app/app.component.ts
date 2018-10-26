import {Component, OnInit} from '@angular/core';
import {UserService} from './user/user.service';
// import 'rxjs/add/operator/map';
// import 'rxjs-compat/add/operator/map';
// import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService]
})
export class AppComponent implements OnInit {
  users = [];
  test = '8888888';
  searchStr = "";



  constructor(private userService: UserService ) {}

    ngOnInit() {

      this.userService.getUsers()
          .subscribe(users => {
            console.log(users);
            return this.users = users;
          }

        });
};
