import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent {

  name!: string;
  email!: string;
  age!: string;

  constructor(private http: HttpService) {}

  getUserById(id: number): void {
    this.http
      .getUserById(id)
      .subscribe();
  }

  getUsers(): void {
    this.http
      .getUsers()
      .subscribe();
  }

  postUser(): void {
    const user = {
      id: Math.random(),
      name: this.name,
      email: this.email,
      age: this.age
    }
    this.http.postUser(user).subscribe();
  }

  putUser(id: number): void {
    const user = {
      id: id,
      name: this.name,
      email: this.email,
      age: this.age
    }
    this.http.putUser(id, user).subscribe();
  }

  deleteUser(id: number) {
    return this.http.deleteUser(id).subscribe();
  }

  getUsersWithHeaders(): void {
    this.http.getUsersWithHeaders().subscribe();
  }

}
