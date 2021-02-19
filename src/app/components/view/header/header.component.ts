import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog"
import { AddPostComponent } from '../../view/add-post/add-post.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public dialog: MatDialog
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

}
