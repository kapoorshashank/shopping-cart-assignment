import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService} from '../../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public loginError;
  public errorMsg: string;

  constructor(
    private router: Router,
    private userService: UserService
  ) {
    this.loginError=false;
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
    const registeredUsersData = JSON.parse(localStorage.getItem('userData')) || [];
    const index = registeredUsersData.findIndex((item) => (item.email === this.loginForm.value.email && item.password === this.loginForm.value.password));
    if (index >= 0) {
      registeredUsersData[index].isActive = true;
      this.userService.setLoggedInUser(registeredUsersData[index].name);
      localStorage.setItem('userData', JSON.stringify(registeredUsersData));
      this.router.navigateByUrl('/product');
      this.errorMsg = '';
    } else {
      this.errorMsg = 'Please enter valid username and password';
    }
  }


}
