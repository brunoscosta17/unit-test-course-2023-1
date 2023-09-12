import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverFocus]'
})
export class HoverFocusDirective {

  constructor() { }

  @HostBinding('style.backgroundColor') backgroundColor!: string;

  @HostListener('mouseover') onMouseOver() {
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseout') onMouseOut() {
    this.backgroundColor = 'inherit';
  }

}
