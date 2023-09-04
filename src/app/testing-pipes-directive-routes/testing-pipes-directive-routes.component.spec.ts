import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingPipesDirectiveRoutesComponent } from './testing-pipes-directive-routes.component';
import { HttpPipe } from '../http.pipe';

describe('TestingPipesDirectiveRoutesComponent', () => {
  let component: TestingPipesDirectiveRoutesComponent;
  let fixture: ComponentFixture<TestingPipesDirectiveRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingPipesDirectiveRoutesComponent, HttpPipe ],
      providers: [HttpPipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingPipesDirectiveRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
