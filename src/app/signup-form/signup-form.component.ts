import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AppServices } from '../shared/app.services';

import { User } from '../user.interface';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  public authForm: FormGroup;
  repassword:string = '';
  alert = true;

  constructor(private _data:AppServices, private _fb: FormBuilder, private router: Router) { 
    this.authForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      repassword: new FormControl('', Validators.required)
    })
   }

  signUp(model: User, isValid: boolean){
    if (isValid && model.password == model.repassword) {
      this.alert = true;
      this._data.addUser(model).subscribe(
        (res) => {
          this.router.navigate(['/log-in']);
        }
      );
    } else {
      this.alert = false;
    }
  }

  ngOnInit() {

  }

}
