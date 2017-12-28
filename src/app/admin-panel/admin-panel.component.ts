import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppServices } from '../shared/app.services';
import { AppData } from '../shared/app.data';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  posts:Array<any> = [
    {
      name : '',
      content : '',
      id : 0
    }
  ];
  username:string = '';
  showAdmin = true; 

  constructor(private _data:AppData, private _services:AppServices, public dialog: MatDialog) { }

  openDialog(): void {
    let dialogRef = this.dialog.open(AddPostDialog, {
      width: '450px',
      data : { name : '', content : '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      this._services.getPosts().subscribe(
        res => {
          this.posts.push(res[res.length - 1]);
        }
      )
    });
  }

  updatePost(post){
    this._services.updatePost(post).subscribe(
      res => {
        console.log('Succes');
      }
    );
    console.log(post);
  }

  deletePost(id){
    this._services.deletePost(id).subscribe(
      res => {
        this.posts.splice(id - 1, 1);
      },
      err => {
        console.log('Shit');
      }
    );
  }

  ngOnInit() {
    this.username = this._data.username;

    if(this.username.length > 0) {
      this.showAdmin = false;
    }

    this._services.getPosts().subscribe(
      res => {
        this.posts = res;
      },
      err => {
        console.log('Error');
      }
    );
  }
}

@Component({
  selector: 'add-post-dialog',
  templateUrl: 'add-post-dialog.html',
})
export class AddPostDialog {

  constructor(
    private _servises : AppServices,
    public dialogRef: MatDialogRef<AddPostDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
    this._servises.addPost(this.data).subscribe(
      res => {
        console.log('New Post!');
      },
      err => {
        console.log('Error, no new post!');
      }
    );
  }

}