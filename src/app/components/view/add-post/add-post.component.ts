import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service'; 
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  message
  constructor(
    public dialog: MatDialog,
    public postService: PostService,
    public dialogRef: MatDialogRef<AddPostComponent>
  ) { }

  ngOnInit(): void {
  }
  
  onNoClick(): void {
    this.dialogRef.close()
  }

  senPodtnew(title:string, body:string){
    this.postService.sendPost({title , body}).subscribe(
      p => {
        this.message = p.result
        console.log('p =',p);
      },
      e => { console.log(e) },
      () => {
         console.log('post send == ', this.message );
         this.dialogRef.close()
         
      }
    )
  }
  
}
