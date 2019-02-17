import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) { }

    getUsers() {
      return this.http.get('https://reqres.in/api/users')
    }

    serviceClick() {
      return console.log('service clicked');
    }
}
