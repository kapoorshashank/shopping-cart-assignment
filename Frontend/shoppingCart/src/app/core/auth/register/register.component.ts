import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService} from '../../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  errorMsg = '';
  registrationForm: FormGroup;

  constructor(
    private router: Router,
    private userService: UserService
    // private _fb: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

}
onSubmit() {
  
  const usrData = {
    name: this.registrationForm.value.firstName, email: this.registrationForm.value.email,
    password: this.registrationForm.value.password, isActive: true
  };
  const registeredUsersData = JSON.parse(localStorage.getItem('userData')) || [];
  const index = registeredUsersData.findIndex((item) => item.email === usrData.email);
  if (index === -1) {
    this.errorMsg = '';
    this.userService.setDataInLocalStorage(usrData);
    this.router.navigateByUrl('/product');
  } else {
    this.errorMsg = 'User with this emailId already exist';
  }
}
}
