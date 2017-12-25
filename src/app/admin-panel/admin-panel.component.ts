import { Component, OnInit } from '@angular/core';
import { AppServices } from '../shared/app.services';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  username:string = '';  

  constructor(private _data:AppServices) { }

  ngOnInit() {
    this.username = this._data.username;
  }

}
