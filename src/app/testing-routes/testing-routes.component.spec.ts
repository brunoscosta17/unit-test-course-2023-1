import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingRoutesComponent } from './testing-routes.component';
import { Router } from '@angular/router';

describe('TestingRoutesComponent', () => {

  let component: TestingRoutesComponent;
  let fixture: ComponentFixture<TestingRoutesComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingRoutesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve navegar para a url informada', () => {
    let route = 'extrato';
    spyOn(router, 'navigate');
    component.navigateUrl(route);
    expect(router.navigate).toHaveBeenCalledWith([`/extrato`]);
  });

});
