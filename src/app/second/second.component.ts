import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
@Input() theme = 'circle-container';
@Input("title") menutitle = 'dummy';
@Output() send: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  sendData(): void{

      this.send.emit(this.menutitle);
  }
}
