import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from "@angular/material/dialog"
import { AddPostComponent } from '../../view/add-post/add-post.component'
import { LoginComponent } from '../../login/login.component'
import { FirebaseService } from '../../../service/firebase.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  id = localStorage.getItem('user_id')

  @Output() isLogout = new EventEmitter<void>()

  constructor(
    public dialog: MatDialog,
    public router: Router,
    public firebaseService: FirebaseService

  ) { }

  ngOnInit(): void {
  }

  createPost() {
    const dialogRef = this.dialog.open( AddPostComponent, {
      width: "50%",

    })
  }

  onlogout() {
    this.firebaseService.logout()
    localStorage.removeItem('user');
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(["/login"]);

  }

  post() {
    this.router.navigate(["/post"])
  }

  mypost() {
    this.router.navigate(["/mypost"])
  }
}
