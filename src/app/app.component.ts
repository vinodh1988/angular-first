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


   handleClick(x): void{
     alert(x);
   }



}

