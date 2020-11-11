import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-block',
  templateUrl: './menu-block.component.html',
  styleUrls: ['./menu-block.component.css']
})
export class MenuBlockComponent implements OnInit {
  items: string[] = ['link 1', 'link 2', 'link 3', 'link 4', 'link 5'];
  theme = 'menu-block';
  constructor() { }

  ngOnInit(): void {
  }

}
