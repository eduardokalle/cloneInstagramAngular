import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog"
import { AddPostComponent } from '../../view/add-post/add-post.component'
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public router: Router 
  ) { }

  ngOnInit(): void {
  }

  createPost() {
    const dialogRef = this.dialog.open( AddPostComponent, {
      width: "30%",
      data: {
        type: "addPost",
        object: { test: "1" },
      },
    })

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    })
  }

  onlogout() {
    localStorage.removeItem('user');
    this.router.navigate([""])
  }

}
