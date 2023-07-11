import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FixProblemsComponent } from './fix-problems/fix-problems.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { StubComponent } from './stub/stub.component';
import { DebuggerTestsComponent } from './debugger-tests/debugger-tests.component';
import { MatchersJasmineComponent } from './matchers-jasmine/matchers-jasmine.component';
import { MockServiceComponent } from './mock-service/mock-service.component';
import { HomeComponent } from './home/home.component';
import { SpyonComponent } from './spyon/spyon.component';
import { SpyOnPropertyComponent } from './spy-on-property/spy-on-property.component';
import { RequestComponent } from './request/request.component';
import { AsynchronousComponent } from './asynchronous/asynchronous.component';
import { TestingComponentComponent } from './testing-component/testing-component.component';
import { FixtureDetectChangesComponent } from './fixture-detect-changes-component/fixture-detect-changes-component.component';
import { FillFormComponent } from './fill-form/fill-form.component';
import { HandleEventComponent } from './handle-event/handle-event.component';
import { InputOutputComponent } from './input-output/input-output.component';

@NgModule({
  declarations: [
    AppComponent,
    FixProblemsComponent,
    StubComponent,
    DebuggerTestsComponent,
    MatchersJasmineComponent,
    MockServiceComponent,
    HomeComponent,
    SpyonComponent,
    SpyOnPropertyComponent,
    RequestComponent,
    AsynchronousComponent,
    TestingComponentComponent,
    FixtureDetectChangesComponent,
    FillFormComponent,
    HandleEventComponent,
    InputOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
