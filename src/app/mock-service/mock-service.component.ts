import { Component } from '@angular/core';
import { MyServiceService } from '../services/my-service.service';

@Component({
  selector: 'app-mock-service',
  templateUrl: './mock-service.component.html',
  styleUrls: ['./mock-service.component.scss']
})
export class MockServiceComponent {

  constructor(private myService: MyServiceService) { }

  getUsers() {
    this.myService.getUsers().subscribe();
  }

}
