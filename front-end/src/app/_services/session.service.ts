import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Session } from '../models/Session';
import { Observable } from 'rxjs';
import { API_URL } from '../_shared/constants';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient) { }

  addSession(session : Session) : Observable<any>  {
    return this.http.post<Session>(API_URL + 'sessions/add', session , httpOptions);
  }

  getSession(id : number){
    debugger
    return this.http.get<Session>(API_URL+'sessions/'+id);
  }

  getAllSessions() : Observable<Session[]> {
    return  this.http.get<Session[]>(API_URL + 'sessions/all');
  }

  deleteSession(id : number){
    return this.http.delete<Session>(API_URL+'sessions/'+id+'/delete');
  }

  updateSession(session : Session ,id : number  ){
    debugger
    return this.http.put(API_URL+'sessions/update/'+id,session);
  }
}
