import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
// import 'rxjs/add/operator/map';
// import 'rxjs-compat/add/operator/map';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {
  size = 8;
  constructor(private http: HttpClient) {}


  getUsers(): Observable<any[]> {
    return this.http.get('https://randomuser.me/api/?results=' + this.size).pipe(map(data=>{
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
  setSize (size) {
    this.size = size;
  }


}
