import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const userRegistation = [
      {
        id: 1,
        user: '',
        email: '',
        password: ''
      },
    ]

    const userLogin = [
      {
        id: 1,
        email: '',
        password: ''
      }
    ]
    return { userRegistation, userLogin }
  }
  constructor() { }
}
