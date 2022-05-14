import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor(
    private http: HttpClient
  ) { }

  getUserDetails(userName: string) {
    return this.http.get(`http://api.github.com/users/${userName}`);
  }

  getRepos(repoUrl: string) {
    return this.http.get(repoUrl);
  }
}
