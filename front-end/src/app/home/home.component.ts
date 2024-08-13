import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Role } from '../models/Role';
import { User } from '../models/User';
import { StorageService } from '../_services/storage.service';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticatedUser'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  role! : String | null;
  board! : String;

  constructor(
    private storageService : StorageService,
  ) { }

  ngOnInit(): void {

    
      //sessionStorage.setItem(AUTHENTICATED_USER, this.storageService.getUser() );
      //sessionStorage.setItem(TOKEN,'data.accessToken');
    

    this.role = sessionStorage.getItem('role');
    
    switch(this.role){
      case "Role_admin" : this.board = 'admin';
      break;
      case "ROLE_ResRelEnt" : this.board = 'ResRelEnt';
      break;
      case "ROLE_coorTech" : this.board = 'coorTech';
      break;
      case "ROLE_formateur" : this.board = 'formateur';
      break;
      case "ROLE_ResRelEnt" : this.board = 'ResRelEnt';
      break;
      case "ROLE_apprenant" : this.board = 'apprenant';
      break;
      case "ROLE_gestStock" : this.board = 'gestStock';
      break;
      case "Role_gestRestaurant" : this.board = 'gestRestaurant';
      break;
      default : this.board = 'user';
    }

  }
}
