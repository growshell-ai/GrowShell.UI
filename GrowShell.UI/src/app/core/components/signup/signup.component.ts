import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  private fb: FormBuilder = inject(FormBuilder);
  
  hidePassword = signal(true);

  signupForm = this.fb.group({
    fullName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    terms: [false, [Validators.requiredTrue]]
  });

  togglePassword(event: MouseEvent) {
    event.stopPropagation();
    this.hidePassword.update(value => !value);
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Signup data:', this.signupForm.value);
    }
  }
}
