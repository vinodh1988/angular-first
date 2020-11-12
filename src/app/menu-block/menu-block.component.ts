import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-block',
  templateUrl: './menu-block.component.html',
  styleUrls: ['./menu-block.component.css']
})
export class MenuBlockComponent implements OnInit {
  @Input() title = 'dummy';
  @Input() items: string[] = [];
  @Input() theme = 'menu-block';
  
  constructor() { }

  ngOnInit(): void {
  }

}
