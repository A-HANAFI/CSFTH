import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApprenantService } from 'src/app/_services/apprenant.service';
import { CandidatService } from 'src/app/_services/candidat.service';
import { Apprenant } from 'src/app/models/Apprenant';
import { ApprenantsDataSource } from './ApprenantsDataSource';

@Component({
  selector: 'app-apprenant-list',
  templateUrl: './apprenant-list.component.html',
  styleUrls: ['./apprenant-list.component.css']
})
export class ApprenantListComponent implements OnInit{

  constructor(
    private candidatService : CandidatService,
    private apprenantService : ApprenantService,
    private router : Router,
    private route : ActivatedRoute 
  ){}

  apprenantsList! : Apprenant[];
  apprenant! : Apprenant;
  rowClicked = false;

  placeholderHeight = 0;
  dataSource!: ApprenantsDataSource;

  displayedColumns = ["Code Inscription", "Num CIN", "date naissance", 
  "Nom pere",  "Prenom pere", "Num Tel"];

  rows! : Apprenant[] ;
  itemSize = 48;

  buttonAction : string = ''

  ngOnInit(){
    this.getApprenants();
    this.apprenantService.getAllApprenant().subscribe(
      (res : Apprenant[]) => {this.apprenantsList = res;
          console.log(res);
      }
    )
    this.dataSource = new ApprenantsDataSource(this.apprenantService);
    this.dataSource.loadApprenants();
  }

  placeholderWhen(index: number, _: any) {
    return index == 0;
  }

  onRowClicked(row : Apprenant){
    console.log(row);
    this.rowClicked = true;
    let apprenant = new Apprenant(row.codeInscription,row.numCIN,row.nomPrenom,row.nomPere,row.prenomPere,row.numTel,row.adress,row.dateNaissance,row.id,'','','',['ROLE_candidat']);
    this.apprenant = apprenant;
  }


  getApprenants(){
    this.apprenantService.getAllApprenant().subscribe(
     (data) => {
       this.apprenantsList = data;
       this.dataSource = new ApprenantsDataSource(this.apprenantService);
       this.dataSource.loadApprenants(); 
     })
    }

    update(){}
}
