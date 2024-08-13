import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { CandidatService } from 'src/app/_services/candidat.service';
import { Candidat } from 'src/app/models/Candidat';

@Component({
  selector: 'app-add-candidat',
  templateUrl: './add-candidat.component.html',
  styleUrls: ['./add-candidat.component.css']
})
export class AddCandidatComponent {

  numCIN : string;
  nomPere   : string;
  prenomPere  : string;
  numTel : string;
  adress  : string;
  dateNaissance  : Date;
  nomPrenom :string;

  constructor(private candidatService : CandidatService){}
  


  updateDOB(dateObject : any): any{
    this.dateNaissance = dateObject.value;
    return dateObject.value;
  }

  addCandidat(){
    let candidat = new Candidat(
      this.numCIN,
      this.nomPrenom,
      this.nomPere,
      this.prenomPere,
      this.numTel,
      this.adress,
      this.dateNaissance,
      Number(sessionStorage.getItem('id')),
      sessionStorage.getItem('username'),
      sessionStorage.getItem('email'),
      sessionStorage.getItem('password'),
      ['Role_Candidat'],
    )
      console.log("nom pr "+ this.nomPrenom + " adress " + this.adress);
    this.candidatService.addCandidat(candidat).subscribe(
      res => console.log(res)
    );
    console.log(candidat);
  }
}
