import { Component, OnInit } from '@angular/core';
import { AppServices } from '../shared/app.services';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public posts:Array<any> = [];

  constructor(private _data: AppServices) { }

  ngOnInit() {
    this._data.getPosts().subscribe(
      (res) => {
          console.log(res);
      },
      (err) => console.log("error : " + err)
    );
  }
}
