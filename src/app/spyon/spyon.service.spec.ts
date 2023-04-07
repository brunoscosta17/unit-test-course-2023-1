import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { SpyonService } from './spyon.service';

describe('SpyonService', () => {

  let service: SpyonService;

  const logger = jasmine.createSpy('log');
  const status = jasmine.createSpyObj('service', ['name', 'age', 'email'])

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

  it('Deve criar método jasmine.createSpy', () => {
    logger('Loguei no sistema.');
    expect(logger).toHaveBeenCalledTimes(1);
    expect(logger).toHaveBeenCalledWith('Loguei no sistema.');
  });

  it('Deve criar métodos com jasmine.createSpyObj', () => {
    status.name('Bruno');
    status.age(35);
    status.email('brunoscosta17@gmail.com');
    expect(status.name).toHaveBeenCalled();
    expect(status.name).toHaveBeenCalledWith('Bruno');
    expect(status.name).toHaveBeenCalledTimes(1);
    expect(status.age).toHaveBeenCalled();
    expect(status.age).toHaveBeenCalledWith(35);
    expect(status.age).toHaveBeenCalledTimes(1);
    expect(status.email).toHaveBeenCalled();
    expect(status.email).toHaveBeenCalledWith('brunoscosta17@gmail.com');
    expect(status.email).toHaveBeenCalledTimes(1);
  });

});
