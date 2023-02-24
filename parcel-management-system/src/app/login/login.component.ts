import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  islogged:boolean = false;

  constructor(private authService:AuthService) {
    this.islogged = this.authService.isLoggedin;
   }

  loginOrLogout(){
    this.authService.loginOrLogout();
    this.islogged = this.authService.isLoggedin;
  }


}
