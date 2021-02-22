import { Injectable , Input } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalVariable } from '../config/global';
import { HttpHeaders, HttpClient, HttpInterceptor  } from '@angular/common/http';
//import { Headers } from '@angular/http';
import { environment } from "../../environments/environment"
//import * as SecureLS from 'secure-ls';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  @Input() data 

  constructor(private http: HttpClient) { }

  getAllPost(submission: any): Observable<any> {

    return this.http.get(builGETTUrl(GlobalVariable.POST_READ_ALL))
  }

  sendPost(submission: any): Observable<any> {

    const headers = this.getHeaders();
    //const idUse = getIdUser();
    //return this.http.post(`https://gorest.co.in/public-api/users/${this.id}/posts`, submission, {headers});
    return this.http.post(builGETTUrl(GlobalVariable.POST_SEND), submission, {headers});
  }

  myPost(submission: any): Observable<any> {

    return this.http.get(builGETTUrl(GlobalVariable.POST_MY),
    )
  }

  postImages(submission: any): Observable<any> {

    return this.http.get(builGETTUrlimages(GlobalVariable.IMAGES),
    )
  }

  private getHeaders() {

    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + environment.token
    })
  }

}

function builGETTUrl(type: string): string {
  let finalUrl = GlobalVariable.BASE_API_URL
  finalUrl += type
  return finalUrl
}

function builGETTUrlimages(type: string): string {
  let finalUrl = GlobalVariable.BASE_API_URL_IMAGES
  finalUrl += type
  return finalUrl
}
