import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User } from '../models/User';
import {API_URL} from '../_shared/constants';

const URL = API_URL;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticatedUser'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username:string,password:string): Observable<any> {
    return this.http.post<any>(
      URL + 'auth/signin', {username,password}
    )
    .pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN,data.token);
          return data;
        }
      )
    );
  }

  
  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }
  
  getAuthenticatedToken() {
    if (this.getAuthenticatedUser())
      return sessionStorage.getItem('key')
    return null
  }

  register(

    username: string, email: string, password: string , roles : string[] | undefined
    //user : User

    ): Observable<any> {
    return this.http.post(
      URL + 'auth/signup',
      {
        username,
        email,
        password,
        roles
      }
      //user
      ,
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(URL + 'signout', { }, httpOptions);
  }
}
