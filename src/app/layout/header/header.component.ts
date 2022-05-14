import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email = null;

  constructor(
    private auth: AuthService,
    private route: Router,
    private toastr: ToastrService

  ) { }

  ngOnInit(): void {

    this.auth.getUser().subscribe((user) => {
      this.email = user?.email;
    });
  }

  async handleSignout() {
    
    try {
      
      await this.auth.signOut();
      this.email = null;
      this.toastr.info("Log in to continue");
      this.route.navigateByUrl('signin');

    } catch (error) {
      this.toastr.error("Something is wrong");
    }

  }

}
