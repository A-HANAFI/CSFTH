import { ChangeDetectionStrategy,Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import {ScrollingModule , CdkVirtualScrollViewport,
  FixedSizeVirtualScrollStrategy,
  VIRTUAL_SCROLL_STRATEGY } from '@angular/cdk/scrolling';
import { User } from '../_models/User';
import { UserService } from '../_services/user.service';
import { Observable } from 'rxjs';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Role } from '../_models/Role';
import { AuthService } from '../_services/auth.service';
import { CustomVirtualScrollStrategy } from './CustomVirtualScrollStrategy';
import { UsersDataSource } from './UsersDataSource';
import { MatPaginator } from '@angular/material/paginator';

import { FormControl,FormGroup ,  Validators , FormBuilder } from '@angular/forms';
import { StorageService } from '../_services/storage.service';

const PAGESIZE = 20;
const ROW_HEIGHT = 48;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{provide: VIRTUAL_SCROLL_STRATEGY, useClass: CustomVirtualScrollStrategy}]
})


export class UsersComponent implements OnInit{

  collectionViewer!: CollectionViewer;
  user! : User;
  users! : User[] ;
    id = new FormControl('');
    username = new FormControl('');
    password = new FormControl('');
    email = new FormControl('');
  userForm = new FormGroup({
    
  })
  
  roles : string[] = [];

  @ViewChild('getusers' ) getusers : any;
  //@ViewChild('id') id : any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(CdkVirtualScrollViewport) viewport!: CdkVirtualScrollViewport;

  selected  =   [{role : "ROLE_USER", checked : true}];
  
  buttonAction : string = '';


  placeholderHeight = 0;
  dataSource!: UsersDataSource;
  displayedColumns = ["id", "username", "email", "roles"];
  rows! : User[] ;
  itemSize = 48;


  //getusers: ElementRef = {} as ElementRef;
  isclicked = false;
  ret : any;
  rolesSelect = [
            {role : "ROLE_USER", checked : true},
            {role :  "ROLE_ADMIN", checked : false},
            {role : "ROLE_ResRelEnt", checked : false},
            {role : "ROLE_coorTech", checked : false},
            {role : "ROLE_formateur", checked : false},
            {role :  "ROLE_apprenant", checked : false},
            {role :   "ROLE_gestApp", checked : false}
          ];
  errorMessage : string ='';


  constructor (
    private usersService : UserService , private authService : AuthService,
    private fb: FormBuilder, private changeDetectorRefs: ChangeDetectorRef,
    private storageService : StorageService
  ){}
  ngOnInit(){

    this.getUsers();
    setTimeout(() => {
      //this.getUsers();
      this.getUsers();
      this.ret = this.getusers.nativeElement.click();
      console.log("timer executed " + this.ret );
    }, 2000);
    this.dataSource = new UsersDataSource(this.usersService);
    this.dataSource.loadUsers(); 
  }

  placeholderWhen(index: number, _: any) {
    return index == 0;
  }

  getUsers(){
    this.usersService.getAllUsers()
    .subscribe(
      (data) => {
          this.users = data;
          this.dataSource = new UsersDataSource(this.usersService);
          this.dataSource.loadUsers(); 
      }
    )
  }

  showAddUser(){
    this.buttonAction = 'add';
    this.id.setValue('');
    this.email.setValue('');
    this.username.setValue('');
    this.password.setValue('');
  }

  addUser(){
    this.roles = this.checkedRoles();
    let user = new User(null,this.username.value?.toString(), this.email.value?.toString() ,this.password.value?.toString(), this.roles);
    // this.authService.register(user.username,user.email,user.password,user.role).subscribe(
    //   (data) => console.log(data)
    // );
    this.usersService.addUser(user)
    .subscribe(
      
      (data) => {
        console.log(data.id);
        this.storageService.clean();
        sessionStorage.setItem('id',data.id);
        this.dataSource = new UsersDataSource(this.usersService);
        }
    )
  }

  checkedRoles() : string[]{
    let r : string[] = [] ;
    var t = this.rolesSelect
      .filter(opt => opt.checked)
      .map(opt => opt);
    this.selected = t;
    t.forEach(function(value){
      r.push(value.role)
    })
    return r;
  }
  deleteUser(){
    let id = Number.parseInt(this.id.value!);
    this.usersService.deleteUser(id).subscribe(
      data => {this.changeDetectorRefs.detectChanges();
      this.dataSource = new UsersDataSource(this.usersService);}

    )
    this.getUsers();
  }

  updateUser(id : any){
    
    id = Number(this.id.value!);
    this.roles = this.checkedRoles();
    let user = new User(id,this.username.value?.toString(), this.email.value?.toString() ,this.password.value?.toString(), Array.from(this.roles.values()));
    this.usersService.updateUser(user,id).subscribe({
      next() {
        window.alert("utilisateur modifier avec succes !")
        this.getUsers();
      },
      error (msg) {this.errorMessage = msg.message}
    });

    this.id.setValue('');
    this.email.setValue('');
    this.username.setValue('');
    this.password.setValue('');

    
  }

  showUpdateUser(){
    this.buttonAction = 'update';
  }
  onRowClicked(row : any){
    this.showUpdateUser();
    this.id.setValue(row.id);
    this.email.setValue(row.email);
    this.username.setValue(row.username);
  }
}
function subscribe(arg0: (data: any) => void) {
  throw new Error('Function not implemented.');
}

