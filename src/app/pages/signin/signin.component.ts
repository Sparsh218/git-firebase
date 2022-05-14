import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private route: Router,
    private toast: ToastrService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const {email, password} = form.form.value;

    this.auth.signIn(email, password).then(
      (res) => {
        this.route.navigateByUrl('');
        this.toast.success("Success sign in");
      },
      (error) => {
        this.toast.error("Sign in error");
        console.log(error);
      }
    )
  }

}
