import { Component } from '@angular/core';

export const AUTHENTICATED_USER = 'authenticatedUser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  connected = sessionStorage.getItem(AUTHENTICATED_USER);
  title = 'front-end'
  
}
