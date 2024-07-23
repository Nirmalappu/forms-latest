import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) {
    this.registerForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      interests: [''],
      experience: [0, [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.userService.addUser(this.registerForm.value);
      console.log('Registration successful');
      alert('Registration successful');
      this.router.navigate(['/login']);
    }
  }
}