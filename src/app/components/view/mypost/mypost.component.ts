import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/service/comment.service' 
import { PostService } from 'src/app/service/post.service' 

@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.css']
})
export class MypostComponent implements OnInit {

  mypost =[]
  mypostcomments =[]

  constructor(
    public postService: PostService,
    public commentService: CommentService
  ) { }

  ngOnInit(): void {
    //this.getMyCommentsPost()
    this.getMyPost()
  }


  getMyPost(){
    this.postService.myPost('').subscribe(
      p => {
        this.mypost = p.data
      },
      e => { console.log(e) },
      () => {
        //console.log('mypost url == ', this.postService.myPost);
        //console.log('mypost == ', this.mypost);
         
      }
    )
  }
  
  getMyCommentsPost(){
    this.commentService.getIDCommentsPost('').subscribe(
      p => {
        this.mypostcomments = p.data
      },
      e => { console.log(e) },
      () => {
         //console.log(' comments of my post == ', this.mypostcomments);
         
      }
    )
  }
}
