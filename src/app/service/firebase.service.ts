import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn = false
  constructor(
    public firebaseAuth : AngularFireAuth  
  ) {}
   
  async singin (email : string , password: string){
    debugger;
    var res = await this.firebaseAuth.signInWithEmailAndPassword(email, password).catch((err) => {
      console.log(err);
    });
    console.log(res);
    /* await this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
         this.isLoggedIn = true
         localStorage.setItem('user',JSON.stringify(res.user))
      }).catch((err) => {
        console.log(err);
      }); */
  }

  logout(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }

}
