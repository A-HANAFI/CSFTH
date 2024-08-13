import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-apprenant',
  templateUrl: './apprenant.component.html',
  styleUrls: ['./apprenant.component.css']
})
export class ApprenantComponent {

  constructor(private router : Router,
    private route : ActivatedRoute
    ){}

    addApprenant(){
    this.router.navigate(['add'],{relativeTo : this.route});
}


  
listApprenant(){
this.router.navigate(['list'],{relativeTo : this.route});
}
}
