import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';

describe('HttpService', () => {

  let service: HttpService;
  let httpTestingController: HttpTestingController;
  let url: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HttpService);
    httpTestingController = TestBed.inject(HttpTestingController);
    url = 'http://localhost:3000';
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve realizar chamada GET por id', () => {
    const id = 3;
    const response =
    {
      "id": 3,
      "name": "Joao",
      "email": "joao@gmail.com",
      "age": 22
    };
    service.getUserById(id).subscribe(res => {
      expect(res).toBe(response);
    });
    console.log(`${url}/users/${id}`);
    const request = httpTestingController.expectOne(`${url}/users/${id}`);
    request.flush(response);
    expect(request.request.method).toBe('GET');
    expect(request.request.url).toBe(`${url}/users/${id}`);
  });

  it('Deve realizar chamada GET para obter usuários', () => {
    const response = [
      {
        "name": "Danilo 2",
        "email": "danilo@gmail.com",
        "age": "30",
        "id": 1
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
      }
    ];
    service.getUsers().subscribe(res => {
      expect(res).toBe(response);
    });
    const request = httpTestingController.expectOne(`${url}/users`);
    request.flush(response);
    expect(request.request.method).toBe('GET');
    expect(request.request.url).toBe(`${url}/users`);
  });

  it('Deve gerar erro ao obter usuários', () => {
    service.getUsers().subscribe({
      error: (err) => {
        expect(err.status).toBe(500);
      }
    });
    const request = httpTestingController.expectOne(`${url}/users`);
    expect(request.request.method).toBe('GET');
    expect(request.request.url).toBe(`${url}/users`);
    request.flush(500, {
      status: 500,
      statusText: 'Erro de Rede'
    });
  });

  it('Deve realizar chamada POST para criar usuário', () => {
    const user = {
      age: "35",
      email: "bruno@email.com",
      id: 0.2285318047674738,
      name: "Bruno"
    };
    const response = {
      age: "35",
      email: "bruno@email.com",
      id: 0.2285318047674738,
      name: "Bruno"
    }
    service.postUser(user).subscribe(res => {
      expect(res).toBe(response);
    });
    const request = httpTestingController.expectOne(`${url}/users`);
    expect(request.request.method).toBe('POST');
    request.flush(response);
  });

  it('Deve realizar chamada PUT para atualizar usuário', () => {
    const id = 1;
    const user = {
      id: 1,
      name: "Janebaldo",
      email: "janebaldo@email.com",
      age: "33"
    };
    const response = {
      id: 1,
      name: "Janebaldo",
      email: "janebaldo@email.com",
      age: "33"
    }
    service.putUser(id, user).subscribe(res => {
      expect(res).toBe(response);
    });

    const request = httpTestingController.expectOne(`${url}/users/${id}`);

    expect(request.request.method).toBe('PUT');
    expect(request.request.url).toBe(`${url}/users/${id}`);

    request.flush(response);
  });

  it('Deve realizar chamada DELETE para deletar usuário', () => {
    const id = 1;
    const response = {};
    service.deleteUser(id).subscribe(res => {
      expect(res).toBe(response);
    });

    const request = httpTestingController.expectOne(`${url}/users/${id}`);

    expect(request.request.method).toBe('DELETE');
    expect(request.request.url).toBe(`${url}/users/${id}`);

    request.flush(response);

  });

  it('Deve conter HEADERS na requisição', () => {

    service.getUsersWithHeaders().subscribe();

    const request = httpTestingController.expectOne(`${url}/users`);

    expect(request.request.headers.has('Authorization')).toEqual(true);
    expect(request.request.headers.has('Content-Type')).toEqual(true);

  });

});
