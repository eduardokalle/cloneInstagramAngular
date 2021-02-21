import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "./auth-guard.guard"
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MypostComponent } from './components/view/mypost/mypost.component';
import { PostComponent } from './components/view/post/post.component'

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  }, 
  {
    path: "",
    //canActivate: [AuthGuard],
    component: HomeComponent,
    children: [    
        {
          path: "mypost",
          //canActivate: [AuthGuard],
          component: MypostComponent
        },
        {
          path: "post",
          //canActivate: [AuthGuard],
          component: PostComponent
        },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
