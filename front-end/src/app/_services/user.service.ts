import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, lastValueFrom, map } from 'rxjs';
import { User } from '../_models/User';
import{API_URL} from '../_shared/constants'

const URL = API_URL;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

   getAllUsers() : Observable<User[]> {
    return  this.http.get<User[]>(URL + 'users/all')
    .pipe(
      map( res  =>  res)
  );
  }

  getUser(id : number){
    return this.http.get<any>(URL+"users/"+id)
  }

  addUser(user : User) : Observable<any>  {
    
    return this.http.post<User>(URL + 'users/add', user , httpOptions)
    // .subscribe(
    //   (data)=> console.log( 'this is the data '+ data , user)
    // )
    ;
    
  }
  deleteUser(id : number){
    console.log('user delete id '+id);
    return this.http.delete(URL +'users/'+id);
  }

  updateUser( user : User , id : number){
    
   return this.http.put(URL+'users/'+id+'/edit',user).pipe(
    map(data => console.log(data))
   );
  }







  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(URL + 'user', { responseType: 'text' });
  }
  
  getModeratorBoard(): Observable<any> {
    return this.http.get(URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(URL + 'admin', { responseType: 'text' });
  }





//   findLessons(
//     courseId:number, filter = '', sortOrder = 'asc',
//     pageNumber = 0, pageSize = 3):  Observable<any> {

//     return this.http.get(API_URL+'users/', {
//         params: new HttpParams()
//             .set('courseId', courseId.toString())
//             .set('filter', filter)
//             .set('sortOrder', sortOrder)
//             .set('pageNumber', pageNumber.toString())
//             .set('pageSize', pageSize.toString())
//     })
//     .pipe(
//         map( res  =>  res["payload"])
//     );
// }
}
