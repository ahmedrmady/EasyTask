import { Component, computed, signal } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { DUMMY_USERS } from '../dummy-users';
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length) ;

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(()=>'assets/users/'+this.selectedUser().avatar);
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  onSelectUser(){
   
    this.selectedUser.set ( DUMMY_USERS[this.getRandomIndex()]);
  }

  getRandomIndex(){
    return Math.floor(Math.random() * DUMMY_USERS.length);
  }
}
