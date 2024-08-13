import { Component, OnInit } from '@angular/core';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticatedUser'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  ngOnInit(){
    
  }

}
