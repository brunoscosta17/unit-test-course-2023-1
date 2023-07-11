import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { FixProblemsComponent } from './fix-problems/fix-problems.component';
import { MockServiceComponent } from './mock-service/mock-service.component';
import { MatchersJasmineComponent } from './matchers-jasmine/matchers-jasmine.component';
import { DebuggerTestsComponent } from './debugger-tests/debugger-tests.component';
import { StubComponent } from './stub/stub.component';
import { SpyonComponent } from './spyon/spyon.component';
import { RequestComponent } from './request/request.component';
import { SpyOnPropertyComponent } from './spy-on-property/spy-on-property.component';
import { AsynchronousComponent } from './asynchronous/asynchronous.component';
import { TestingComponentComponent } from './testing-component/testing-component.component';
import { FixtureDetectChangesComponent } from './fixture-detect-changes-component/fixture-detect-changes-component.component';
import { FillFormComponent } from './fill-form/fill-form.component';
import { HandleEventComponent } from './handle-event/handle-event.component';
import { InputOutputComponent } from './input-output/input-output.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatDialogModule,
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        FixProblemsComponent,
        DebuggerTestsComponent,
        MatchersJasmineComponent,
        MockServiceComponent,
        StubComponent,
        SpyonComponent,
        SpyOnPropertyComponent,
        RequestComponent,
        AsynchronousComponent,
        TestingComponentComponent,
        FixtureDetectChangesComponent,
        HandleEventComponent,
        FillFormComponent,
        InputOutputComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'unit-test-course-2023-1'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('unit-test-course-2023-1');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Curso Testes Unitários Angular - Jasmine / Karma');
  });
});
