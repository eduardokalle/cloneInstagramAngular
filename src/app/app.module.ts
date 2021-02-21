import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http"

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/view/header/header.component';
import { PostComponent } from './components/view/post/post.component';
import { AuthGuard } from "./auth-guard.guard"

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from "@angular/material/icon";
import { MatExpansionModule } from '@angular/material/expansion';
import { AddPostComponent } from './components/view/add-post/add-post.component';
import { MatDialogModule } from "@angular/material/dialog"
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import {AngularFireModule} from '@angular/fire'
//import { AngularFireAuthModule } from '@angular/fire/auth';

import { MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FirebaseService } from './service/firebase.service';
import { MypostComponent } from './components/view/mypost/mypost.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    PostComponent,
    AddPostComponent,
    MypostComponent,
    
  ],
  entryComponents: [AddPostComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    MatExpansionModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    //AngularFireAuthModule,
    MatButtonModule,
    AngularFireModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCttZmJh_ArFeLbhU4RQNzxFl_93HHYn6o",
      authDomain: "cloneinstagram-ac725.firebaseapp.com",
      projectId: "cloneinstagram-ac725",
      storageBucket: "cloneinstagram-ac725.appspot.com",
      messagingSenderId: "884564723659",
      appId: "1:884564723659:web:2e86deeac02755c3a9184e"
    })  
  ],
  providers: [FirebaseService,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
