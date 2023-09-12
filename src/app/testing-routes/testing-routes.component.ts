import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testing-routes',
  templateUrl: './testing-routes.component.html',
  styleUrls: ['./testing-routes.component.scss']
})
export class TestingRoutesComponent {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateUrl(url: string) {
    this.router.navigate([`/${url}`])
  }

}
