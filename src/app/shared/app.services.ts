import {Injectable} from '@angular/core';
import {Http, Headers, Response, Jsonp, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

@Injectable()
export class AppServices{
    private _url = 'http://localhost:3000';

    constructor(private _http : Http) { }

    // Get data

    getPosts() {
        return this._http.get(`${this._url}/posts`).map(res => res.json()).delay(500);
    }

    getComments() {
        return this._http.get(`${this._url}/comments`).map(res => res.json());
    }

    getUsers() {
        return this._http.get(`${this._url}/profile`).map(res => res.json());
    }

    // Post data

    addUser(user) {
        return this._http.post(`${this._url}/profile`, user).map((res: Response) => res.json());
    }

    addComments(comment) {
        return this._http.post(`${this._url}/comments`, comment).map((res: Response) => res.json());
    }

    addPost(post){
        return this._http.post(`${this._url}/posts`, post).map((res: Response) => res.json());
    }

    // Update data

    updatePost(post) {
        return this._http.put(`${this._url}/posts/${post.id}`, { "name" : post.name, "content" : post.content }).map((res: Response) => res.json());
    }

    // Delete data

    deletePost(id){
        return this._http.delete(`${this._url}/posts/${id}`).map((res: Response) => res.json());
    }
}