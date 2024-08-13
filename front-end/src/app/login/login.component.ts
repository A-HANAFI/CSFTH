import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  role! : string ;

  constructor(
    private authService: AuthService, 
    private storageService: StorageService,
    private router : Router,
    private route : ActivatedRoute
    ) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(): void {
    const   { username, password } = this.form;

    let user = new User(null,this.form.username, this.form.password)

    this.authService.login(username, password ).subscribe(
      (data) => {
        console.log(data);
        this.storageService.clean();
        this.storageService.saveUser(data);
       sessionStorage.setItem('key',data.token);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
       // console.log("isLoggedIn " + this.isLoggedIn);
        this.roles = this.storageService.getUser().roles;

        if (this.isLoggedIn) {
          this.router.navigate(['home']);
          //window.sessionStorage.setItem('role', this.roles[0]);
          }
          
        })
      }
          
        
       //this.reloadPage();

    //   ,
    //   error: err => {
    //     this.errorMessage = err.error.message;
    //     this.isLoginFailed = true;
    //   }
    // }
    // )
    // ;

 

  reloadPage(): void {
    window.location.reload();
  }
}
