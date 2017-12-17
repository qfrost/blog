import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AppServices{
    private _url = 'api/posts.json';

    constructor(private _http : Http) {
        
    }

    getPosts() {
        return this._http.get(this._url).map((response : Response) => response.json());
    }
}