import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  private username: string;
    private client_id = 'ff4c0a19f26714497917';
    private client_secret = 'ca2a53ed43a0b02683fa4cc65135422f7dbcc264';

    constructor(private _http: Http) {
        console.log('Github Service Ready...');
        this.username = 'xduncan';
    }

    getUser() {
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
    }

    getRepos() {
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
    }

    updateUser(username: string) {
        this.username = username;
    }

}
