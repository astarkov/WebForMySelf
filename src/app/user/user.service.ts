import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
// import 'rxjs/add/operator/map';
// import 'rxjs-compat/add/operator/map';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

 /* getUsers() {

    return  this.http.get('https://randomuser.me/api/?results=50').map(function(user){
        console.log(user);
        return user

      })

  }*/
  getUsers(): Observable<any[]> {
    return this.http.get('https://randomuser.me/api/?results=10').pipe(map(data=>{
      let usersList = data["results"];
      return usersList.map(function(user:any) {
        return {
          name: user.name.first+''+user.name.last,
          image: user.picture.large,
          geo: user.location.city +''+user.location.state + '' + user.location.street
        };
      });

    }));
  }


}
