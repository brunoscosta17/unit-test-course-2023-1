import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-asynchronous',
  templateUrl: './asynchronous.component.html',
  styleUrls: ['./asynchronous.component.scss']
})
export class AsynchronousComponent {

  data: any;
  dataPromise: any;
  isLogged: any;
  name!: string;

  constructor(private service: HttpService) { }

  getUsers() {
    this.service.getUsers().subscribe((res: any) => {
      this.data = res;
    })
  }

  getUsersWithPromise() {
    this.service.getUsersWithPromise().then((res: any) => {
      console.log('res then -->>', res)
      this.dataPromise = res;
    })
  }

  isAuthenticaded() {
    this.service.isAuthenticated().then((res: any) => {
      this.isLogged = res;
    })
  }

  defineValue() {
    this.name = 'Danilo';
    setTimeout(() => {
      this.name = 'Jessica'
    }, 100)
  }


}
