import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username: string;
  private client_id = 'Iv1.96015a290125b208';
  private client_secret = '0020327bd3427ebf57c554cad410bf77d765e14d';
  constructor(private http: HttpClient) {
    this.username = 'phpcodertop';
  }

  getUser() {
    return this.http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret);
  }

  getRepos() {
    return this.http.get('http://api.github.com/users/' + this.username + '/repos' + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret);
  }

  updateUser(username: string) {
    this.username = username;
  }

}
