import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { AppData } from '../shared/app.data'
import { AppServices } from '../shared/app.services'
import { User } from '../user.interface';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public logInForm: FormGroup;

  constructor(private _service:AppServices, private _data : AppData, public router: Router) { 
    this.logInForm = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  username:string = '';
  password:string = '';

  logIn(model:User){
    this._service.getUsers().subscribe(
      (res) => {
        for (const user in res) {
          if (res[user].username == model['login'] && res[user].password == model['password']) {
            this._data.username = model['login'];
            this.router.navigate(['/admin']);
            console.log('Succes');
          } else {
            console.log('Error Name or Password');
          }
        }
      },
      (err) => {
        console.log('Error with get username and password!');
      }
    );
  }

  ngOnInit() {
    
  }

}
