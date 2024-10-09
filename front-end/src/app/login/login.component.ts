import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../_models/User';

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

  isLoginFailed = false;
  isLoggedIn : boolean;
  errorMessage = '';
  roles: string[] = [];
  role! : string ;

  constructor(
    private authService: AuthService, 
    private router : Router,
    private route : ActivatedRoute
    ) { }

  ngOnInit(): void {

    // if (this.authService.isUserLoggedIn) {
    //   this.isLoggedIn = true;
    //   this.roles = this.authService.getRoles();
    // }
  }

  onSubmit(): void {
    const   { username, password } = this.form;

    let user = new User(null,this.form.username, this.form.password)

    this.authService.login(username, password ).subscribe(
      (data) => {
        console.log(data);
        

        if (this.authService.isUserLoggedIn()) {
          this.isLoggedIn= true;
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
