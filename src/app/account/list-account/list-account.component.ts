import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/user.service';
@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css']
})
export class ListAccountComponent {
  users :any=[]
    constructor(private userService :UsersService){
      this.userService.getAll().subscribe({
        next:(data) => {this.users = data.data},
       
        
      })
    }

}
