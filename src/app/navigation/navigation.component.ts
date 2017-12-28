import { Component, OnInit } from '@angular/core';
import { AppData } from '../shared/app.data';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  username:string = '';

  constructor(private _data:AppData) { }

  ngOnInit() {
    this.username = this._data.username;
  }

}
