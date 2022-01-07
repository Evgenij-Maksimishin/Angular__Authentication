import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emitters } from '../emitters/emitters';
import { userRegistration } from '../interfaces/userRegisrtration'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  message: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<userRegistration>('api/userRegistation', { withCredentials: true }).subscribe(
      (res:any) => {
        this.message = `Hi ${res.name}`;
        Emitters.authEmitter.emit(true);
      },
      err => {
        this.message = `You are not logged in`;
        Emitters.authEmitter.emit(false);  
      }
    )
  }

}
