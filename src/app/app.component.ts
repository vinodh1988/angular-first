import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
   appname = 'First Sample App' ;
   fonts = 'Consolas';
   circlemenus = ['Projects', 'Achievements', 'Products', 'KeyPeople'];
   menus = [
     {title: 'Social Media', values: ['Twitter', 'Instagram', 'Youtube', 'Facebook']},
     {title: 'Global Offices', values: ['Malaysia', 'Japan', 'Finland', 'South Africa']}
   ];


   handleClick(x): void{
     alert(x);
   }



}

