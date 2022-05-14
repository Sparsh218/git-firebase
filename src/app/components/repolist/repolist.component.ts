import { Component, Input, OnInit, OnChanges, ChangeDetectorRef } from '@angular/core';
import { GitService } from 'src/app/services/git.service';

@Component({
  selector: 'app-repolist',
  templateUrl: './repolist.component.html',
  styleUrls: ['./repolist.component.css']
})
export class RepolistComponent implements OnInit {

  @Input() repoUrl: string;
  repos = [];

  constructor(
    private githubService: GitService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {

    this.githubService.getRepos(this.repoUrl).subscribe(
      (reposFetched: []) => {
        this.repos = reposFetched;
        this.ref.detectChanges();
      },
      (error) => {
        console.log(error);
      }
    )

  }
}
