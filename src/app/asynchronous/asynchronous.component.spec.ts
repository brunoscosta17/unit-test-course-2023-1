import { of } from 'rxjs';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { AsynchronousComponent } from './asynchronous.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpService } from '../services/http.service';
import { By } from '@angular/platform-browser';

describe('AsynchronousComponent', () => {
  let component: AsynchronousComponent;
  let fixture: ComponentFixture<AsynchronousComponent>;
  let httpService: HttpService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsynchronousComponent ],
      imports: [HttpClientTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsynchronousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpService = TestBed.inject(HttpService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#getUsers Deve fazer request para obter lista de usuarios com subscribe', () => {
    const response = [
      {
        "id": 1,
        "name": "Alejandro",
        "email": "alejandro@email.com",
        "age": "98"
      },
      {
        "id": 3,
        "name": "Joao",
        "email": "joao@gmail.com",
        "age": 22
      },
      {
        "id": 4,
        "name": "Joao",
        "email": "joao@gmail.com",
        "age": 22
      },
      {
        "id": 0.8230837961873159,
        "name": "Danilo ",
        "email": "danilo@gmail.com",
        "age": "30"
      },
      {
        "id": 0.5762624582650566,
        "name": "wdasdsa",
        "email": "sadsad@mail",
        "age": "dsfds"
      },
      {
        "id": 0.2285318047674738,
        "name": "Bruno",
        "email": "bruno@email.com",
        "age": "35"
      }
    ];
    spyOn(httpService, 'getUsers').and.returnValue(of(response));
    component.getUsers();
    expect(component.data).toEqual(response);
    // expect(component.data).toBeTruthy();
  });

  it('#getUsersWithPromise Deve fazer request para obter lista de usuarios com promise', async() => {
    const response = [
      {
        "id": 1,
        "name": "Alejandro",
        "email": "alejandro@email.com",
        "age": "98"
      },
      {
        "id": 3,
        "name": "Joao",
        "email": "joao@gmail.com",
        "age": 22
      },
      {
        "id": 4,
        "name": "Joao",
        "email": "joao@gmail.com",
        "age": 22
      },
      {
        "id": 0.8230837961873159,
        "name": "Danilo ",
        "email": "danilo@gmail.com",
        "age": "30"
      },
      {
        "id": 0.5762624582650566,
        "name": "wdasdsa",
        "email": "sadsad@mail",
        "age": "dsfds"
      },
      {
        "id": 0.2285318047674738,
        "name": "Bruno",
        "email": "bruno@email.com",
        "age": "35"
      }
    ];
    spyOn(httpService, 'getUsersWithPromise').and.returnValue(Promise.resolve(response));
    await component.getUsersWithPromise();
    expect(component.dataPromise).toEqual(response);
  });

  it('#isAuthenticaded Deve fazer request para verificar se usuário está autenticado', (done: DoneFn) => {
    const loggedOut = fixture.debugElement.query(By.css('.logged-out')).nativeElement;
    let spy = spyOn(httpService, 'isAuthenticated').and.returnValue(Promise.resolve(true));
    component.isAuthenticaded();
    spy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges();
      const logged = fixture.debugElement.query(By.css('.logged')).nativeElement;
      expect(logged.textContent).toBe('Logado');
      done();
    });
    expect(loggedOut.textContent).toBe('Deslogado');
  });

  it('Deve logar usuário com whenStable', async() => {
    const loggedOut = fixture.debugElement.query(By.css('.logged-out')).nativeElement;
    expect(loggedOut.textContent).toBe('Deslogado');
    spyOn(httpService, 'isAuthenticated').and.returnValue(Promise.resolve(true));
    component.isAuthenticaded();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const logged = fixture.debugElement.query(By.css('.logged')).nativeElement;
      expect(logged.textContent).toBe('Logado');
    });
  });

  it('Deve logar usuário com fakeAsync', fakeAsync(() => {
    component.defineValue();
    tick(1000);
    expect(component.name).toBe('Jessica');
  }));

});
