import { Component, computed, EventEmitter, input, Input, output, Output, signal } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { DUMMY_USERS } from '../dummy-users';
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length) ;

// type User = {
//   name:string,
//   avatar:string,
//   id:string
// }
interface User {
  name:string,
  avatar:string,
  id:string
};
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
@Input({required:true}) user!:User;
 @Output() select =new EventEmitter();


  get imagePath(){
    return 'assets/users/'+this.user.avatar;
  }

  
  onSelectUser(){
    this.select.emit(this.user.id);
  }
  
  //this is the new feture 
// select = output<string>()

  //this example with use signal 
  // name = input<string>();
  // avatar = input<string>();

  // imagePath = computed(()=>'assets/users/'+this.avatar())
}
