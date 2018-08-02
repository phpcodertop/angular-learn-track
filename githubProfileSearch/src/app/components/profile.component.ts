import {Component, OnInit} from '@angular/core';
import {GithubService} from '../services/github.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
    private user;
    private username;
    private repos;
    constructor(private githubService: GithubService) {}
    ngOnInit(): void {
      this.githubService.getUser().subscribe(
        user => {
          this.user = user;
          console.log(user);
        }
      );
      this.githubService.getRepos().subscribe(
        repos => {
          this.repos = repos;
          console.log(repos);
        }
      );
    }

    searchUser() {
      this.githubService.updateUser(this.username);
      this.githubService.getUser().subscribe(
        user => {
          this.user = user;
          console.log(user);
        }
      );
      this.githubService.getRepos().subscribe(
        repos => {
          this.repos = repos;
          console.log(repos);
        }
      );
    }
}
