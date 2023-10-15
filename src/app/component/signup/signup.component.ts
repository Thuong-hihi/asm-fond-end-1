import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { UsersService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Validators, FormGroup } from '@angular/forms';
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
    name: ['' ,[Validators.required,Validators.minLength(4)]],
    email: ['',[Validators.required,Validators.email]],
    password: ['',[Validators.required,Validators.minLength(5)]] ,
    confirmPassword:['',[Validators.required]],

    role:[0,Validators.required]
    
  } , { validators: this.checkPasswords });


  async handleSignup() {
    //  if (this.userForm.invalid) return
    // if (this.userForm.value.password != this.userForm.value.confirmPassword) return
    try {
      const rs = await lastValueFrom(this.user.signUp(this.userForm.value));
      alert(rs.messages)
      this.router.navigate(['/signin']);
      console.log(this.handleSignup());
      
    } catch (error: any) {
      alert(error.error.messages)
    }
  }
  checkPasswords(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    if (password === confirmPassword) return null;
    return { notSame: true };
  }
  onSubmit() {
    console.log(this.userForm.valid);
  }
}
