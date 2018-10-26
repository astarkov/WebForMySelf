import {Pipe, PipeTransform} from '@angular/core';
import {Directive} from '@angular/core';

@Pipe(){
  name: 'search'
}
export class SearchPipe implements PipeTransform {
  transform(users, value) {
    return users.filter(user => {
      return user.name.includes(value);
    });
  }
}
