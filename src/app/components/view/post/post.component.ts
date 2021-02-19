import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service' 
import { CommentService } from 'src/app/service/comment.service' 
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  postall = []
  commentsall = []
  panelOpenState = false;

  constructor(
    public postService: PostService,
    public commentService: CommentService
  ) { }

  ngOnInit(): void {
    this.getAllPost()
    this.getIdCommentsPost()
  }
  
  getAllPost(){
    this.postService.getAllPost('').subscribe(
      p => {
        this.postall = p.data
      },
      e => { console.log(e) },
      () => {
         console.log('postall == ', this.postall);
         
      }
    )
  }
  
  getIdCommentsPost(){
    this.commentService.getIDCommentsPost('').subscribe(
      p => {
        this.commentsall = p.data
      },
      e => { console.log(e) },
      () => {
         console.log('commentsall == ', this.commentsall);
         
      }
    )
  }
}
