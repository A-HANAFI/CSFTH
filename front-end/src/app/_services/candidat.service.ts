import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Candidat } from '../models/Candidat';
import{API_URL} from '../_shared/constants';



@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  constructor(private http: HttpClient) { }


  public getAllCandidats() : Observable<Candidat[]> {
    return  this.http.get<Candidat[]>(API_URL + 'candidat/all')
    .pipe(
      map( res  =>  res)
  );
  }

  addCandidat(candidat : Candidat) : Observable<any>  {
    
    return this.http.post<Candidat>(API_URL + 'candidat/add', candidat );
  }

  deleteCandidat(id : number){
    console.log('id '+id);
    return this.http.delete(URL + 'candidat/'+ id);
  }


}
