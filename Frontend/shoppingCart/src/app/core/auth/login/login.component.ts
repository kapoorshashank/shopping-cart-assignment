import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginError = false;

  constructor(
    private _fb: FormBuilder,
    private _router: Router
  ) {
  }

  ngOnInit(): void {
    this.loginError = false;
    this.loginForm = this._fb.group({
      email: [
        '',
        [
          Validators.required
        ],
      ],
      password: [
        '',
        [
          Validators.required
        ],
      ],
    });
  }

// To do : Validations in Progress, Get the login data from JSON File

}
