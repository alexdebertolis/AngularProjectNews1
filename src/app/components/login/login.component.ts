import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login-service.service';
import { User } from '../../interfaces/user';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User;

  constructor(
    private loginService: LoginService,
    public route: ActivatedRoute,
    public location: Location,
    public router: Router,
  ) {}

  ngOnInit(): void {
    this.loginService.getUser();
  }
  send(): void {}
  clear(): void {}
}
