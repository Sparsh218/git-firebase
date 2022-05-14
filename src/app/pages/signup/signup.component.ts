import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private route: Router,
    private toast: ToastrService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const {email, password} = form.form.value;

    this.auth.signUp(email, password).then(
      (res) => {
        this.route.navigateByUrl('/');
        this.toast.success("Success signup");
      },
      (error) => {
        this.toast.error("Sign up error");
        console.log(error);
      }
    )
  }

}
