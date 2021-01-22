import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.scss']
})
export class RegistrationComponentComponent implements OnInit {

  registerForm!: FormGroup ;

  constructor(private formBuilder: FormBuilder, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get data() { return this.registerForm.controls; }

  Submit() {
    if (this.registerForm.invalid) {
      return;
    } else {
      localStorage.setItem("firstname", this.data.firstname.value);
      localStorage.setItem("lastname", this.data.lastname.value);
      localStorage.setItem("email", this.data.email.value);
      localStorage.setItem("password", this.data.password.value);
      this._snackBar.open('Register Successfully', 'Success', {
        duration: 2000,
      });
      this.router.navigate(['/login']);
    }
  }

}
