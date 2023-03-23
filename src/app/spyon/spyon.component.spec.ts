import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpyonComponent } from './spyon.component';

describe('SpyonComponent', () => {

  let component: SpyonComponent;
  let fixture: ComponentFixture<SpyonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpyonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpyonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve logar usuário no sistema ao clicar no botão', () => {
    let spyOnComponent = spyOn(component, 'toggleLogged').and.callThrough();
    component.toggleLogged();
    expect(spyOnComponent).toHaveBeenCalledTimes(1);
    expect(component.isLogged).toBe(true);
  });

});
