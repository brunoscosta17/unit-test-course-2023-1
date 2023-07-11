import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent implements OnInit {

  @Input() user: any;
  @Output() userMessage: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    console.log('Recebi o usuario do componente pai: ', this.user)
  }

  onUserEmit() {
    this.userMessage.emit('Recebi o usuario!')
  }

}
