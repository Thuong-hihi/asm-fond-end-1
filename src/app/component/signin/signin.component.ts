import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

 constructor(private form: FormBuilder, private user: UsersService,
  private router: Router) { }

  userForm = this.form.group({
    name: ['',[Validators.required,Validators.minLength(4)]],
    email: ['',[Validators.required,Validators.email]],
    password: ['',[Validators.required,Validators.minLength(5)]],
   
  });

  async handleSignin() {
  //   try {
  //     const rs = await lastValueFrom(this.user.signIn(this.userForm.value));
  //     alert(rs.messages);
  //     if (rs.role === 1) { // Kiểm tra nếu role là 1
  //       this.router.navigate(['/admin']); // Chuyển hướng đến trang admin
  //       console.log(rs.role);
        
  //     } else {
  //       this.router.navigate(['/']); // Chuyển hướng đến trang home
  //     }
  //   } catch (error: any) {
  //     alert(error.error.messages);
  //   }
  // }
  try {
    const rs = await lastValueFrom(this.user.signIn(this.userForm.value));
    alert(rs.messages)
    localStorage.setItem('role', rs.findUser.role)
    this.router.navigate(['/']);
  } catch (error: any) {
    alert(error.error.messages)

  }
}
}
