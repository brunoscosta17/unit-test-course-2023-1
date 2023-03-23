import { Component } from '@angular/core';

@Component({
  selector: 'app-spy-on-property',
  templateUrl: './spy-on-property.component.html',
  styleUrls: ['./spy-on-property.component.scss']
})
export class SpyOnPropertyComponent {

  msg: string  = 'Hello world!';

  get message(): string {
    return this.msg;
  }

}
