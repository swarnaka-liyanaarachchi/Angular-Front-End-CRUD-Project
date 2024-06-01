import { Component } from '@angular/core';
import { AuthService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  credentials = {username: '', password: ''};
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        localStorage.setItem('auth_token', response.authentication_token);
        this.router.navigate(['/items']);
      },
      error: () => {
        this.errorMessage = 'Authentication Failed';
      }
    });
  }



}
