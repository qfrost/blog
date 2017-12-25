import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AppServices } from '../shared/app.services'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private _data:AppServices, public router: Router) { }

  username:string = '';
  password:string = '';

  logIn(){
    this._data.getUsers().subscribe(
      (res) => {
        for (const user in res) {
          if (res[user].name == this.username && res[user].password == this.password) {
            this._data.username = this.username
            this.router.navigate(['/admin']);
            console.log('Succes');
          } else {
            console.log('Fuck You');
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
