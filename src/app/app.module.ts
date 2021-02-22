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
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import firebase from 'firebase'; 

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MypostComponent } from './components/view/mypost/mypost.component';

const config = {
  apiKey: "AIzaSyCjLvlfAi47-tDMeXCbusFRjanGU1xpnTQ",
  authDomain: "cloneinstagramangular.firebaseapp.com",
  databaseURL:"cloneinstagramangular.firebaseapp.com",
  projectId: "cloneinstagramangular",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
}

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
    MatButtonModule,
    MatProgressSpinnerModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,  
  ],
  providers: [AuthGuard,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
