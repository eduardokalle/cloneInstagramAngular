import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalVariable } from '../config/global';
import { HttpHeaders, HttpClient } from '@angular/common/http';
//import * as SecureLS from 'secure-ls';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getIDCommentsPost(submission: any): Observable<any> {

    return this.http.get(builGETTUrl(GlobalVariable.COMMENTS))
  }
}

function builGETTUrl(type: string): string {
  let finalUrl = GlobalVariable.BASE_API_URL
  finalUrl += type
  return finalUrl
}
