import { Component, OnInit } from '@angular/core';
import { AppServices } from '../app.services';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [AppServices]
})
export class HomeComponent implements OnInit {

  public posts:Array<any> = [];

  constructor(private _data: AppServices) { }

  ngOnInit() : void {
    this._data.getPosts().subscribe(
      data => {
        this.posts = data;
      }
    );
  }

}
