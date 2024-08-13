import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Session } from '../models/Session';
import { SessionService } from '../_services/session.service';
import { CollectionViewer } from '@angular/cdk/collections';
import { SessionsDataSource } from './SessionsDataSource';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit{

  sessionYear = new FormControl('');
  sessionName = new FormControl('');
  sessionCapacity = new FormControl('');
  sessionStartDate = new FormControl('');
  sessionEndDate = new FormControl('');
  id = new FormControl('');

  sessions! : Session [];
  session! : Session;

  buttonAction = '';

  collectionViewer!: CollectionViewer;
  ret : any;

  placeholderHeight = 0;
  dataSource!: SessionsDataSource;
  displayedColumns = ["nomSession", "annee", "capacite", "dateDebut", "dateFin"];
  rows! : Session[] ;
  itemSize = 48;

  constructor(private sessionService : SessionService,
    private changeDetectorRefs: ChangeDetectorRef
    ){}

  ngOnInit(): void {
    this.getSessions();
    setTimeout(() => {
      //this.getUsers();
      this.getSessions();
      // this.ret = this.getusers.nativeElement.click();
      // console.log("timer executed " + this.ret );
      this.dataSource = new SessionsDataSource(this.sessionService);
      this.dataSource.loadSessions(); 
    }, 2000);

  }

  showAddSession(){
    this.buttonAction = 'add';
  }
  showUpdateSession(){
    this.buttonAction = 'update';
  }

  onRowClicked(row : any){
    this.showUpdateSession();
    this.sessionYear.setValue(row.annee);
    this.sessionName.setValue(row.nomSession);
    this.sessionCapacity.setValue(row.capacite);
    this.sessionStartDate.setValue(row.dateOuverture);
    this.sessionEndDate.setValue(row.dateFermeture);
    this.session = new Session(Number(row.id),this.sessionYear.value,this.sessionName.value,
      Number(this.sessionCapacity.value),this.sessionStartDate.value, this.sessionEndDate.value  )
  }

  addSession(){
    
    let session = new Session(null,
      this.sessionYear?.value?.toString(),
      this.sessionName?.value?.toString(),
      Number(this.sessionCapacity?.value?.toString()),
      this.sessionStartDate.value?.toString(),
      this.sessionEndDate.value?.toString()
      )
      this.sessionService.addSession(session).subscribe(
        res => {console.log(res.message);
          this.dataSource = new SessionsDataSource(this.sessionService);
          this.dataSource.loadSessions();
        }
      );
  }

  updateSession(){
    let session = new Session(this.session.id,
      this.sessionYear?.value?.toString(),
      this.sessionName?.value?.toString(),
      Number(this.sessionCapacity?.value?.toString()),
      this.sessionStartDate.value?.toString(),
      this.sessionEndDate.value?.toString()
      )
    debugger
    this.sessionService.updateSession(session,this.session.id).subscribe(
      ()=> {
        this.getSessions();
      }
    )
  }

  deleteSession(){
 
    this.sessionService.deleteSession(this.session.id).subscribe(
      data => {this.changeDetectorRefs.detectChanges();
      this.dataSource = new SessionsDataSource(this.sessionService);}
    )
  }

  getSessions(){
    this.sessionService.getAllSessions().subscribe(
      session => this.sessions = session
    )
  }


}
