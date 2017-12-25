import { Component, OnInit } from '@angular/core';
import { AppServices } from '../shared/app.services';
import { Http } from "@angular/http"

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  dataNewUser = {
    username : '',
    password : '',
    email : '',
    id : 3,
  }

  constructor(private _data:AppServices, private http:Http) { }

  signUp(){
    console.log(this.dataNewUser);
    
    this._data.addUser(this.dataNewUser).subscribe(
      (res) => {
        console.log(res);
      }
    );
  }

  ngOnInit() {

  }

}
