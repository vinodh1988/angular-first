import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
theme = 'circle-container';

@Input("title") menutitle = 'dummy';
  constructor() { }

  ngOnInit(): void {
  }

}
