import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, RouterOutletContract } from '@angular/router';
import '../../assets/post.json'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form!: FormGroup;
  router!: Router;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      email: '',
      password: ''
    })
  }

  submit() {
    /* console.log(this.form.getRawValue()); */
    this.http.post('', this.form.getRawValue())
      .subscribe(() => this.router.navigate(['/login']))
  }

}
