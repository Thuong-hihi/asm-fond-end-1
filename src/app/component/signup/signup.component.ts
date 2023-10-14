import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { UsersService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(private form: FormBuilder, private user: UsersService,
    private router: Router
    ) { }

  userForm = this.form.group({
    name: [''],
    email: [''],
    password: [''],
    confirmPassword: [''],
  });

  async handleSignup() {
    try {
      const rs = await lastValueFrom(this.user.signUp(this.userForm.value));
      alert(rs.messages)
      this.router.navigate(['/signin']);
    } catch (error: any) {
      alert(error.error.messages)

    }
  }
}
