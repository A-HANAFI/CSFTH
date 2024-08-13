import { Component } from '@angular/core';
import { SectionService } from '../_services/section.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent {

  
  constructor(private sectionService : SectionService,
    private router : Router,
    private route : ActivatedRoute 
  ){}
ngOnInit(): void {
  throw new Error('Method not implemented.');
}

  addSection(){
      this.router.navigate(['add'],{relativeTo : this.route});
  }
  

    
listSection(){
  this.router.navigate(['list'],{relativeTo : this.route});
}

}
