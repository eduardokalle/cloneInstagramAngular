import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from "@angular/material/dialog"
import { AddPostComponent } from '../../view/add-post/add-post.component'
import { LoginComponent } from '../../login/login.component'
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public router: Router,
    //public loginComponent: LoginComponent 

  ) { }

  ngOnInit(): void {
  }

  createPost() {
    const dialogRef = this.dialog.open( AddPostComponent, {
      width: "30%",
    })
  }

  onlogout() {
//this.loginComponent.handleLogout();
    localStorage.removeItem('user');
    this.router.navigate(["/login"]);

  }

  post() {
    this.router.navigate(["/post"])
  }

  mypost() {
    this.router.navigate(["/mypost"])
  }
}
