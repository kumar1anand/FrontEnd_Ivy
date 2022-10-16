import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment_14_Oct';
  showComponent=true;
  
  profileForm = new FormGroup({
    firstName: new FormControl('Anand '),
    lastName: new FormControl(' null'),
    address: new FormGroup({
      Country: new FormControl('India '),
      city: new FormControl(' Hyd'),
      state: new FormControl('null '),
      zip: new FormControl('null ')
    })
  })
  
  //butt= new FormGroup({})
  onSubmit() {    
    console.log(this.profileForm.value);
  }
  
}
