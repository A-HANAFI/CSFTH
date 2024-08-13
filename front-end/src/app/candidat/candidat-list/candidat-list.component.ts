import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatService } from 'src/app/_services/candidat.service';
import { CandidatsDataSource } from '../CandidatsDataSource';
import { Candidat } from 'src/app/models/Candidat';
import { ApprenantComponent } from 'src/app/apprenant/apprenant.component';
import { ApprenantService } from 'src/app/_services/apprenant.service';
import { Apprenant } from 'src/app/models/Apprenant';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-candidat-list',
  templateUrl: './candidat-list.component.html',
  styleUrls: ['./candidat-list.component.css']
})
export class CandidatListComponent implements OnInit {

  constructor(private candidatService : CandidatService,
    private apprenantService : ApprenantService,
    private userService : UserService,
    private router : Router,
    private route : ActivatedRoute 
  ){}

  
  CandidatsList! : Candidat[];
  candidat! : Candidat;
  rowClicked = false;
  errorMessage = '';

  //email = new FormControl('');


  placeholderHeight = 0;
  dataSource!: CandidatsDataSource;
  //displayedColumns = ["Num CIN", "Nom prenom", "Num Tel", "date naissance",  "Nom pere", "Prenom pere"];
  displayedColumns = ["Nom prenom", "Num CIN", "date naissance", "Nom pere",  "Prenom pere", "Num Tel", "Adresse"];
  rows! : Candidat[] ;
  itemSize = 48;
  
  buttonAction : string = ''
  
  ngOnInit(): void {
    this.getCandidats();
    this.candidatService.getAllCandidats().subscribe(
      (res : Candidat[]) => {this.CandidatsList = res;
          console.log(res);
      }
    )
    this.dataSource = new CandidatsDataSource(this.candidatService);
    this.dataSource.loadCandidats();
  }

  placeholderWhen(index: number, _: any) {
    return index == 0;
  }
  onRowClicked(row : Candidat){
    console.log(row);
    this.rowClicked = true;
    let candidat = new Candidat(row.numCIN,row.nomPrenom,row.nomPere,row.prenomPere,row.numTel,row.adress,row.dateNaissance,row.id,'','','',['ROLE_candidat']);
    this.candidat = candidat;
  }

  valider(){
    
    let apprenant = new Apprenant('ins'+this.candidat.numCIN,this.candidat.numCIN,this.candidat.nomPrenom,
    this.candidat.nomPere, this.candidat.prenomPere,this.candidat.numTel,this.candidat.adress,this.candidat.dateNaissance,
    this.candidat.id,this.candidat.username,this.candidat.email, this.candidat.password, this.candidat.role);
    this.userService.deleteUser(this.candidat.id).subscribe(
      ()=> console.log('validate candidat '+ this.candidat.id)
    );
    this.apprenantService.addApprenant(apprenant).subscribe(
      () => { console.log('added apprenant '+apprenant) }
    );

  }

  getCandidats(){
    this.candidatService.getAllCandidats().subscribe(
     (data) => {
       this.CandidatsList = data;
       this.dataSource = new CandidatsDataSource(this.candidatService);
       this.dataSource.loadCandidats(); 
     }
     
    )
 }

   onDelete(){
    console.log('to delete candidate '+this.candidat);
    this.userService.deleteUser(this.candidat.id).subscribe(
      ()=> {
        this.errorMessage = Error.name;
        console.log(Error.name)
      }
    );
  }

}
