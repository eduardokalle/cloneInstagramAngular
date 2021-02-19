import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http"

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/view/header/header.component';
import { PostComponent } from './components/view/post/post.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from "@angular/material/icon";
import {MatExpansionModule} from '@angular/material/expansion';
import { AddPostComponent } from './components/view/add-post/add-post.component';
import { MatDialogModule } from "@angular/material/dialog"
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';

import { MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    PostComponent,
    AddPostComponent,
    
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
    MatInputModule  
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
