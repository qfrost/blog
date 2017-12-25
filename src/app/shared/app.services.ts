import {Injectable} from '@angular/core';
import {Http, Headers, Response, Jsonp, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AppServices{
    private _url           = 'api';
    public username:string = 'Guest';

    constructor(private _http : Http) { }

    getPosts() {
        return this._http.get(`${this._url}/posts.json`).map(res => res.json());
    }

    getUsers() {
        return this._http.get(`${this._url}/users.json`).map(res => res.json());
    }

    addUser(user) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(user);
        return this._http.post('/api/users.json', body, options ).map((res: Response) => res.json());
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }
}