import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']

})
export class UserComponent {
  @Input() user;
  @Input() test;
  @Input() searchStr;
  isMarked = false;
    onClick() {
      console.log('click');
      this.isMarked = !this.isMarked;
    }
}



