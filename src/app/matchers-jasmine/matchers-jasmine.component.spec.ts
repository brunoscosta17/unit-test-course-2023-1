import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchersJasmineComponent } from './matchers-jasmine.component';

describe('MatchersJasmineComponent', () => {
  let component: MatchersJasmineComponent;
  let fixture: ComponentFixture<MatchersJasmineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchersJasmineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchersJasmineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve testar o uso do matcher toEqual', () => {
    expect(true).toEqual(true);
    expect([1,2,3]).toEqual([1,2,3]);
  });

  it('Deve testar o uso do matcher toBe', () => {
    let names1 = ['Aaa', 'Bbb', 'Ccc', 'Ddd'];
    let names2 = ['Eee', 'Fff', 'Ggg', 'Hhh'];
    let age = 10;
    // expect(names1).toEqual(names2);
    expect(age).toEqual(10);
  });

  it('Deve testar o uso do matcher toBeTruthy', () => {
    expect(true).toBeTruthy();
    expect(10).toBeTruthy();
    expect({}).toBeTruthy();
  });

});
