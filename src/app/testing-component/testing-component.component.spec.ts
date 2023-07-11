import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingComponentComponent } from './testing-component.component';
import { By } from '@angular/platform-browser';

describe('TestingComponentComponent', () => {
  let component: TestingComponentComponent;
  let fixture: ComponentFixture<TestingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve acessar elemento na DOM com debbugElement.query*()', () => {
    let title = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(title.innerText).toBe('Trabalhando com debugElement.query() e nativeElement.querySelector()');
  });

  it('Deve acessar elemento na DOM com nativeElement.querySelector()', () => {
    let paragraph = fixture.nativeElement.querySelector('p');
    expect(paragraph.innerText).toBe('esta aprendendo com curso de testes unitarios?');
  });

  it('Deve verificar se background color do botão Sim é verde', () => {
    // let btnYes = fixture.nativeElement.querySelector('.btn-yes');
    let btnYes = fixture.debugElement.query(By.css('.btn-yes')).nativeElement;
    expect(btnYes.style.backgroundColor).toBe('green');
  });

  it('Deve verificar se background color do botão Não é vermelho', () => {
    // let btnNo = fixture.nativeElement.querySelector('.btn-no');
    let btnNo = fixture.debugElement.query(By.css('.btn-no')).nativeElement;
    expect(btnNo.style.backgroundColor).toBe('red');
  });

});
