import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { SpyonService } from './spyon.service';

describe('SpyonService', () => {

  let service: SpyonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(SpyonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve retornar uma lista de usuários', () => {
    const response = [
      { name: 'Bruno da Silva Costa', age: 35, email: 'brunoscosta17@gmail.com' },
      { name: 'Mariana Vieira Costa', age: 9, email: 'marivieiracosta19@gmail.com' },
      { name: 'Fernanda Diniz Camilo', age: 39, email: 'fdinizcamilo@gmail.com' },
    ];
    spyOn(service, 'getUsers').and.returnValue(of(response));
    service.getUsers().subscribe(res => {
      expect(res).toEqual(response);
    });
  });

});
