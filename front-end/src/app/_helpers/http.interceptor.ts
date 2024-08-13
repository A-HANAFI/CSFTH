import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { StorageService } from '../_services/storage.service';
import { EventBusService } from '../_shared/event-bus.service';
import { EventData } from '../_shared/event.class';
import { AuthService } from '../_services/auth.service';
import { API_URL } from '../_shared/constants';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  

  constructor(private authService: AuthService, private eventBusService: EventBusService) { }

  

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    var authToken = sessionStorage.getItem('key');

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    if(req.url != API_URL+'auth/signin'){
    var authReq = req.clone(
      { headers: req.headers.append('Authorization',`Bearer ${authToken }`) 
    //  withCredentials: true,
    }
    );
    console.log('request '+authReq.headers.getAll('Authorization'));
    // send cloned request with header to the next handler.
    return next.handle(authReq);
  } else{
    return next.handle(req);
  }  
}


    // var jwtAuthHeaderString = sessionStorage.getItem('key');
    // req = req.clone({
    //   setHeaders: { Authorization: `Bearer ${jwtAuthHeaderString}` }
    //   //withCredentials: true,
    // });
    
    // return next.handle(req);

    // return next.handle(req).pipe(
    //   catchError((error) => {
    //     if (
    //       error instanceof HttpErrorResponse &&
    //       !req.url.includes('auth/signin') &&
    //       error.status === 401
    //     ) {
    //       return this.handle401Error(req, next);
    //     }

    //     return throwError(() => error);
    //   })
    // );
  }

  // private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
  //   if (!this.isRefreshing) {
  //     this.isRefreshing = true;

  //     if (this.storageService.isLoggedIn()) {
  //       this.eventBusService.emit(new EventData('logout', null));
  //     }
  //   }



export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
];
