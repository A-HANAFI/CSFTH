import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SectionService } from 'src/app/_services/section.service';
import { Section } from 'src/app/_models/Section';
import { SectionsDataSource } from '../SectionsDataSource';
import { SessionService } from 'src/app/_services/session.service';
import { Session } from 'src/app/_models/Session';

@Component({
  selector: 'app-list-section',
  templateUrl: './list-section.component.html',
  styleUrls: ['./list-section.component.css']
})
export class ListSectionComponent {

  
  constructor(private sectionService : SectionService,
    private sessionService : SessionService,
    private router : Router,
    private route : ActivatedRoute 
  ){}

  
  sectionsList! : Section[];
  section! : Section;
  rowClicked = false;

  session! : Session;


  //email = new FormControl('');


  placeholderHeight = 0;
  dataSource!: SectionsDataSource;
  displayedColumns = ["code section", "Code Specialite", "Nom Section",
    "nombre Group","capacite Apprenant", "codeDiplome", "dateEntree", "dateFin", "session"
    ];
  rows! : Section[] ;
  itemSize = 48;
  
  buttonAction : string = ''
  
  ngOnInit(): void {
    this.getSections();
    this.sectionService.getAllSections().subscribe(
      (res : Section[]) => {this.sectionsList = res;
          console.log(res);
      }
    )
    this.dataSource = new SectionsDataSource(this.sectionService);
    this.dataSource.loadSections();
  }

  placeholderWhen(index: number, _: any) {
    return index == 0;
  }

  onGetSession(id : any){
    this.sessionService.getSession(Number(id)).subscribe(
      (data) => {this.section.session = data;}
    );
  }

  onRowClicked(row : Section){
    
    this.rowClicked = true;
    let section = new Section(row.id,row.codeSection,row.codeSpecialite,row.nomSection, row.nombreGroup,
      row.capaciteApprenant,row.codeDiplome , row.dateEntree, row.dateFin);
    this.section = section;
  }
  onUpdate(){
    this.sectionService.updateSection(this.section.id, this.section).subscribe(
      () => {console.log("section updated "+ this.section.id);
      this.dataSource = new SectionsDataSource(this.sectionService);
      this.dataSource.loadSections();
    }
    )
  }

  onDelete(){
    this.sectionService.deleteSection(this.section.id).subscribe(
      () => console.log("deleted section"+this.section.id)
    )
  }

  getSections(){
    this.sectionService.getAllSections().subscribe(
     (data) => {
       this.sectionsList = data;
       this.dataSource = new SectionsDataSource(this.sectionService);
       this.dataSource.loadSections(); 
     }
     
    )
 }


}
