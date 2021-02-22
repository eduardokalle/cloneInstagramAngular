import { Component, OnInit, Input } from '@angular/core';
import { PostService } from 'src/app/service/post.service' 
import { CommentService } from 'src/app/service/comment.service' 
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postall = []
  commentsall = []
  images 
  panelOpenState = false;
  isLoading 

  constructor(
    public postService: PostService,
    public commentService: CommentService
  ) { }

  ngOnInit(): void {
    this.isLoading = true
    this.getAllPostimages()
    setTimeout(()=>{
      this.getAllPost(),
      this.getIdCommentsPost()
      this.isLoading = false
    }, 1000);

    
  }

  
  @Input() data: {}
  
  getAllPost(){
    this.postService.getAllPost('').subscribe(
      p => {
        this.postall = p.data
      },
      e => { console.log(e) },
      () => {
         console.log('postall == ', this.postall.length);
         console.log(this.postall[0].user_id);
         this.postall[0].user_id
         console.log(this.postall[0].user_id);
         const user_id = this.postall[0].user_id
         localStorage.setItem('user_id', user_id)
         
         for (let i = 0; i<this.postall.length; i+= 1) {
           console.log(this.images[i]);
           this.postall[i].image = this.images[i];
         }
         
      }
    )
  }
  
   async getAllPostimages(){
    await this.postService.postImages('').subscribe(
      p => {
        this.images = p.message
      },
      e => { console.log(e) },
      () => {
         console.log('images == ', this.images);
      
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
