import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'unit-test-course-2023-1';
  user: any;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.user = {name: 'Danilo', email: 'danilodev.silva@gmail.com', password: '091011'}
  }

  getUserMessage(event: any) {
    console.log('Mensagem do filho: ', event)
  }

  goTo(route: string) {
    this.router.navigate([`/${route}`])
  }

}
