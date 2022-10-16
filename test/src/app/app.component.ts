import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  showComponent=true;
  userData='admin';
  itemData='pass';

  loginForm = new FormGroup({
      user:new FormControl('Amin '),
      password: new FormControl('Anand ')
  })
  loginUser(){
    console.log(this.loginForm.value);
  }
}
