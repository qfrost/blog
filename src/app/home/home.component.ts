import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AppServices } from '../shared/app.services';

import { Comment } from '../comment.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public commentForm: FormGroup;

  posts:Array<any> = [];
  comments:Array<any> = [];
  

  constructor(private _data: AppServices, private _fb: FormBuilder) { 
    this.commentForm = new FormGroup({
      postId: new FormControl(),
      body: new FormControl('')
    })
   }

  addComment(model : Comment, postId : number) {
    this.commentForm.value.postId = postId;
    this._data.addComments(model).subscribe(
      res => {
        this.comments.push(res);
        console.log(res);
      },
      err => {
        console.log('Error');
      }
    );
  }

  ngOnInit() {
    this._data.getPosts().subscribe(
      (res) => {
        for (const post in res) {
          this.posts.push(res[post]);
        }
      },
      (err) => console.log("error : " + err)
    );

    this._data.getComments().subscribe(
      (res) => {
        this.comments = res;
        console.log(this.comments);
      },
      (err) => console.log("error : " + err)
    );
  }
}
