import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Section } from '../models/Section';
import { API_URL } from '../_shared/constants';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(public http: HttpClient) { }


  public getAllSections() : Observable<Section[]> {
    return  this.http.get<Section[]>(API_URL + 'sections/all')
    .pipe(
      map( res  =>  res)
  );
  }

  addSection(section : Section): Observable<Section>   {
    
     return this.http.post<Section>(API_URL + 'sections/add', section);
  }

  deleteSection(id : number): Observable<Section> {
    return this.http.delete<Section>(API_URL+'sections/'+id);
  }

  updateSection(id : number, section : Section){
    return this.http.put<Section>(API_URL+'sections/update/'+id,section);
  }
}
