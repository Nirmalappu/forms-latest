import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
// username: any;
// password: any;
// login() {
// throw new Error('Method not implemented.');
loginForm: FormGroup;

  

constructor(private fb: FormBuilder, private router: Router) {
  this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });
}


  onSubmit() {
    if (this.loginForm.valid) {
      // Implement login logic here
      console.log('Login successful');
      this.router.navigate(['/users']);
    }
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
