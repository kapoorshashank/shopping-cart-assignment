import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
// import {ValidationService} from "../validation.service"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  validationMessages: { [key: string]: { [key: string]: string } };

  registrationForm: FormGroup;

  constructor(
    private _router: Router,
    private _fb: FormBuilder
  ) {

  }

  ngOnInit(): void {
// To do : Validations in Progress, POST the register data into JSON File
}
}
