import { Component, OnInit } from '@angular/core';
import { SectionService } from 'src/app/_services/section.service';
import { SessionService } from 'src/app/_services/session.service';
import { Section } from 'src/app/_models/Section';
import { Session } from 'src/app/_models/Session';

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.css']
})
export class AddSectionComponent implements OnInit{

 
  codeSection  :  string;
	codeSpecialite  : string ;
    nomSection : string;
	nombreGroup  : Number;
	capaciteApprenant : Number;
	codeDiplome : string;
	dateEntree : string;
	dateFin : string;
  sessions : Session[];
  sessionId : string;

  constructor(public sectionService : SectionService,
    private sessionService : SessionService){}

  ngOnInit(): void {
    this.sessionService.getAllSessions().subscribe(
      data => this.sessions = data
    )
  }

  addSection(){
    debugger
    let session = this.sessionService.getSession(Number(this.sessionId)).subscribe(
      data => session = data
    );
    let section = new Section(undefined,this.codeSection,this.codeSpecialite,this.nomSection,
    this.nombreGroup, this.capaciteApprenant, this.codeDiplome, this.dateEntree,this.dateFin, session);
    
    this.sectionService.addSection(section).subscribe(
      ()=>{console.log("added section"+ section.id);}
    );
  }



}
