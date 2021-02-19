import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { FirebaseService } from '../../service/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  title = 'firebase-angular-auth';
  isSignedIn = false
  constructor(
    public firebaseService : FirebaseService,
    private router: Router,
    ){}
  ngOnInit(){
    if(localStorage.getItem('user')!== null){ 
    this.isSignedIn= true
    } else
    this.isSignedIn = false
  }
  async onSignin(email:string,password:string){
    await this.firebaseService.singin(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
    this.router.navigate(["/home"])
  }
  handleLogout(){
    this.isSignedIn = false
  }
}