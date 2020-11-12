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

   theme1 = 'menu-block';
   theme2 = 'circle-container';

   message = '';

   menus = [
     {title: 'Social Media', values: ['Twitter', 'Instagram', 'Youtube', 'Facebook']},
     {title: 'Global Offices', values: ['Malaysia', 'Japan', 'Finland', 'South Africa']}
   ];


   handleClick(x): void{
     this.theme1 = x === 1 ? 'menu-block' : 'menu-block alter';
     this.theme2 = x === 1 ? 'circle-container' : 'circle-container alter';
     console.log(this.theme1, this.theme2)
   }


   subscribed(data): void{
     this.message = 'Last Clicked ' + data;
   }

}

