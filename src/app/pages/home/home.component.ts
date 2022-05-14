import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GitService } from 'src/app/services/git.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user = null;
  userName: string;
  error = null;

  constructor(
    private git: GitService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  handleSearch() {
    this.git.getUserDetails(this.userName).subscribe(
      (user) => {
        this.user = user;
        this.error = null;
        this.ref.detectChanges();
      },
      (error) => {
        this.user = null;
        this.error = error;
        this.ref.detectChanges();
      }
    )
  }

}
