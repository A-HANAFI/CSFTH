import { Component, ElementRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { StorageService } from '../_services/storage.service';
import { AuthService } from '../_services/auth.service';
import { EventBusService } from '../_shared/event-bus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  roles: string[] = [];
  isLoggedIn = false;
  switchRoles : boolean = false;
  role! : string;
  username?: string;

  eventBusSub?: Subscription;

  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    private eventBusService: EventBusService,
    private router : Router,
    
  ) {}

  ngOnInit(): void {

    this.isLoggedIn = this.authService.isUserLoggedIn();
    this.roles = this.authService.getRoles();
    if(this.roles.length == 1){
      this.role = this.roles[0];
      window.sessionStorage.setItem('role',this.role);
    }
    if(this.roles.length > 1){
      this.switchRoles = true;
    }
    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout();
    });
  }

  getSelectedRole(role : string){
    window.sessionStorage.setItem('role',role);
    this.role= role;
    this.router.navigate(['home']);
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        window.location.reload();
        this.router.navigate(['welcome']);
      },
      error: err => {
        console.log(err);
      }
    });
  }
  loadwelcome(){this.router.navigate(['welcome']);}

}
