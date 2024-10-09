import { Component, OnInit } from '@angular/core';
import { Candidat } from '../_models/Candidat';
import { CandidatService } from '../_services/candidat.service';
import { FormControl } from '@angular/forms';
import { UsersDataSource } from '../users/UsersDataSource';
import { User } from '../_models/User';
import { CandidatsDataSource } from './CandidatsDataSource';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent implements OnInit {


  constructor(private candidatService : CandidatService,
      private router : Router,
      private route : ActivatedRoute 
    ){}
    
  ngOnInit(){
    
  }

    addCandidat(){
        this.router.navigate(['add'],{relativeTo : this.route});
    }
    

      
  listCandidat(){
    this.router.navigate(['list'],{relativeTo : this.route});
  }




  

  

  

  showAddUser(){
      this.router.navigate(['add'], {relativeTo: this.route } )   
      //this.showAaddUser = true; 
  }

  


}
