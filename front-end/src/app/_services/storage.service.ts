import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: any): void {
    window.sessionStorage.setItem('auth-user', JSON.stringify(user));
    sessionStorage.setItem('id', user.id);
    sessionStorage.setItem('username',user.username);
    sessionStorage.setItem('email',user.email);
    sessionStorage.setItem('Token',user.accessToken);
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem('auth-user');
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public isLoggedIn(): boolean {
    
    const user = window.sessionStorage.getItem('auth-user');
    if (user) {
      return true;
   }

   return false;
  }
}
