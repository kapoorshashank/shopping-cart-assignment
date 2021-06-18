import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';

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
    private userService: UserService,
  ) {

  }

  ngOnInit(): void {

    this.registrationForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required],)


    }, this.pwdMatchValidator);

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

  pwdMatchValidator(frm: FormGroup) {
    debugger;
    return frm.get('password').value === frm.get('confirmPassword').value
      ? null : { 'mismatch': true };
  }

  get password() { return this.registrationForm.get('password'); }
  get confirmPassword() { return this.registrationForm.get('confirmPassword'); }
  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }
}
