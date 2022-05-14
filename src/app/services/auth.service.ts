import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private auth: AngularFireAuth ) { }

  signIn(username: string, password: string) {
    return this.auth.signInWithEmailAndPassword(username, password);
  }

  signUp(username: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(username, password);
  }

  getUser() {
    return this.auth.authState;
  }

  signOut() {
    return this.auth.signOut();
  }
}
