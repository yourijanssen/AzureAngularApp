import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  user = { name: '' };

  constructor(private userService: UserService) { }

  addUser(): void {
    this.userService.addUser(this.user).subscribe();
  }
}