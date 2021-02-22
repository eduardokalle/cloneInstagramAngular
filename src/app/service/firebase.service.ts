import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn = false
  constructor(
    public firebaseAuth : AngularFireAuth  
  ) {}
   
  async singin (email : string , password: string){
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
         this.isLoggedIn = true
         localStorage.setItem('user',JSON.stringify(res.user))
         localStorage.setItem('isLoggedIn','true')
      }).catch ((error)=>{
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: errorCode,
          })} else {
          Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: errorMessage,
          })
        }
      })
  }

  logout(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }

}
