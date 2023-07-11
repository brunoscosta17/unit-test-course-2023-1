import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureDetectChangesComponent } from './fixture-detect-changes-component.component';
import { By } from '@angular/platform-browser';

describe('FixtureDetectChangesComponent', () => {
  let component: FixtureDetectChangesComponent;
  let fixture: ComponentFixture<FixtureDetectChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixtureDetectChangesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixtureDetectChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#title deve ser "Aprendendo a usar fixture.detectChange()"', () => {
    // let title = fixture.debugElement.nativeElement.querySelector('h1');
    let title = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(title.textContent).toBe("Aprendendo a usar fixture.detectChange()");
    // expect(component.title).toBe("Aprendendo a usar fixture.detectChange()");

  });

});
