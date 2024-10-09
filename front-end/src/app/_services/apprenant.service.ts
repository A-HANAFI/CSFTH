import { Injectable } from '@angular/core';
import { ApprenantComponent } from '../apprenant/apprenant.component';
import { HttpClient } from '@angular/common/http';
import { Apprenant } from '../_models/Apprenant';
import{API_URL} from '../_shared/constants'
import { Observable } from 'rxjs';

const URL = API_URL;

@Injectable({
  providedIn: 'root'
})
export class ApprenantService {

  constructor(private http: HttpClient) { }

  addApprenant(apprenant : Apprenant) : Observable<Apprenant>{
    debugger
    return this.http.post<Apprenant>(URL+'apprenant/add',apprenant);
  }

  getAllApprenant() : Observable<Apprenant[]>
  {
    return this.http.get<Apprenant[]>(URL+'apprenant/all');
  }
}
