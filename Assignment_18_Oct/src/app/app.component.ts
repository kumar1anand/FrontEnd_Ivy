import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment_18_Oct';
  public numbers=[11,12,13,14,15];

 name:any="This is pipeline Example";
 num:any=201.0231222;
 today=Date();
 nump:any=0.321321

  Greet1()
  {
    console.log("Greetings");
  }
  
    Greet2(event:any)
    {
        console.log(event);
    }
    Greet3(event:any)
    {
      console.log(event.type);
    }
}
