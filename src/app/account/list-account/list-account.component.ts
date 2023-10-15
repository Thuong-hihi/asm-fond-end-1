import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css']
})
export class ListAccountComponent implements OnInit {
  users: any = [];

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAll().subscribe({
      next: (data) => {
        this.users = data; // Gán dữ liệu trả về từ API vào thuộc tính users
      },
      error: (error) => {
        console.log('error', error.message);
      },
      complete: () => {
        console.log('complete');
      }
    });
  }
}











//   ngOnInit() {
//     this.userService.getAll().subscribe(
//       (data) => {
//         this.users = data;
//       },
//       (error) => {
//         console.error('Error fetching users', error);
//       }
//     );
//   }
// }
