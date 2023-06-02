import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUserById(id: number): Observable<any> {
    return this.http.get(`${this.url}/users/${id}`);
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.url}/users`);
  }

  postUser(user: any): Observable<any> {
    return this.http.post(`${this.url}/users`, user);
  }

  putUser(id: any, user: any): Observable<any> {
    return this.http.put(`${this.url}/users/${id}`, user);
  }

  deleteUser(id: any): Observable<any> {
    return this.http.delete(`${this.url}/users/${id}`);
  }

  getUsersWithHeaders(): Observable<any> {
    const token = 'kakakakakakakakakakakakakakakaka';
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json');
    return this.http.get(`${this.url}/users`, { headers });
  }

}
