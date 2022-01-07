import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, } from '@angular/forms';
import { Router } from '@angular/router';
import { userLogin } from '../interfaces/userLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  userLogin!: userLogin;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: '',
    })
  }

  submit() {
    this.http.post<userLogin>('api/userLogin', this.form.getRawValue(), { withCredentials: true })
      .subscribe(() => this.router.navigate(['/']))
  }
}
