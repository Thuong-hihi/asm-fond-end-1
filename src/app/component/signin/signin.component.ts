import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/user.service';
import { FormBuilder } from '@angular/forms';
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
    name: [''],
    email: [''],
    password: [''],
   
  });

  async handleSignin() {
    try {
      const rs = await lastValueFrom(this.user.signIn(this.userForm.value));
      alert(rs.messages)
      this.router.navigate(['/admin']);
    } catch (error: any) {
      alert(error.error.messages)

    }
  }
}
