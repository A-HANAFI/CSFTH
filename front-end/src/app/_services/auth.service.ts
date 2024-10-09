import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User } from '../_models/User';
import {API_URL} from '../_shared/constants';

const URL = API_URL;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private AUTHENTICATED_USER = new User();
  private isLoggedIn? : boolean;
  private roles? : string[];

  login(username:string,password:string): Observable<any | string[]> {
    return this.http.post<any>(
      URL + 'auth/signin', {username,password}
    )
    .pipe(
      map(
        data => {
          this.AUTHENTICATED_USER.username = username;
          this.isLoggedIn = true;
          return data;
        }
      )
    );
  }

  getRoles(){
    if(this.isLoggedIn){
       this.login(this.AUTHENTICATED_USER.username,this.AUTHENTICATED_USER.password)
       .subscribe(  (data) => {
        this.roles = data.roles;
       }
      )
    }else{
      return null;
    }
  }

  
  isUserLoggedIn(){
    if(this.isLoggedIn){
      return true;
    }else{
      return false;
    }
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
      ,
      httpOptions
    ).pipe(
      map(
        data=> {
          this.AUTHENTICATED_USER.username = username;
          this.isLoggedIn = true;
          this.roles = roles;
          return data;
        }
      )
    )
    
    ;
  }

  logout(): Observable<any> {
    this.AUTHENTICATED_USER = null;
    this.isLoggedIn = false;
    return this.http.post(URL + 'signout', { }, httpOptions)
    .pipe(
      map(
        data=>{
          this.isLoggedIn = false;
          this.AUTHENTICATED_USER = null;
          return data;
        }
      )
    );

  }
}
