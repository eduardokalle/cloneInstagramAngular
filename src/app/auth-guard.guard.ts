import { Injectable } from "@angular/core"
import { Router, CanActivate } from "@angular/router"
import { LoginComponent } from "./components/login/login.component"

@Injectable()

export class AuthGuard implements CanActivate {
  
 in : LoginComponent

  constructor(public router: Router) {}
  
  canActivate(): boolean {
    
    if (this.in.isSignedIn == false) {
      this.router.navigate([""])
      return false
    }
    return true
  }

 }