import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stub',
  templateUrl: './stub.component.html',
  styleUrls: ['./stub.component.scss']
})
export class StubComponent {

  constructor(private router: Router) {}

  goTo(): void {
    this.router.navigate(['/home']);
  }

}
