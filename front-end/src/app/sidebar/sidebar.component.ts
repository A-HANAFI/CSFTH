import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { StorageService } from '../_services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, DoCheck  {

  selectedName! : any;
  username : string = '';
  navbars! :  {key :string, val : string} []  ;
  role!  : string | null ;
  constructor(
    private userService: UserService,
    private storageService : StorageService,
    private router  : Router
    ) { }

  ngOnInit(): void {
    this.selectedName = null;
    this.username = this.storageService.getUser().username;
    this.ngDoCheck();
  }

  changeColor(i : any){
    
    this.selectedName = this.navbars[i].val;
  }

  ngDoCheck(){

    this.navbars  = [
      {key :'home/users', val:'Gestion Utilisateur'},
      {key :'home/candidat', val:'Gestion des Candidats'},
      {key :'home/stock', val:'Gestion de stock'},
      {key :'home/restaurant', val:'Gestion du restaurant'},
      {key :'home/apprenant', val:'Gestion des apprenants'},
      {key :'home/formateur', val:'Gestion des formateurs'},
      {key :'home/cours', val:'Gestion des cours'},
      {key :'home/sessions', val:'Gestion des sessions'},
      {key :'home/sections', val:'Gestion des sections'},
      {key :'home/groupes', val:'Gestion des groupes'},
      {key :'home/stages', val:'Gestion des stages'},
      {key :'home/entreprises', val:'Gestion des entreprises'},
      {key :'home/matiere', val:'Gestion des matières'},
    ]
    
  //   this.role = window.sessionStorage.getItem('role');
  //   switch(this.role){
  //     case "ROLE_ADMIN" : {
  //       this.navbars  = [
  //         {key :'home/users', val:'Gestion Utilisateur'},
  //         {key :'home/candidat', val:'Gestion des Candidats'},
  //         {key :'home/stock', val:'Gestion de stock'},
  //         {key :'home/restaurant', val:'Gestion du restaurant'},
  //         {key :'home/apprenant', val:'Gestion des apprenants'},
  //         {key :'home/formateur', val:'Gestion des formateurs'},
  //         {key :'home/cours', val:'Gestion des cours'},
  //         {key :'home/sessions', val:'Gestion des sessions'},
  //         {key :'home/sections', val:'Gestion des sections'},
  //         {key :'home/groupes', val:'Gestion des groupes'},
  //         {key :'home/stages', val:'Gestion des stages'},
  //         {key :'home/entreprises', val:'Gestion des entreprises'},
  //         {key :'home/matiere', val:'Gestion des matières'},
  //       ]
  //     } break;
  //     case "ROLE_ResRelEnt" : {
  //       this.navbars  = [
  //         {key :'home/stages', val:'Gestion des stages'},
  //         {key :'home/entreprises', val:'Gestion des entreprises'},
  //       ]
  //     } break;

  //     case "ROLE_coorTech" : {
  //       this.navbars  = [
  //         {key :'home/sessions', val:'Gestion des sessions'},
  //         {key :'home/sections', val:'Gestion des sections'},
  //         {key :'home/groupes', val:'Gestion des groupes'},
  //         {key :'home/formateur', val:'Gestion des formateurs'},
  //       ]
  //     } break;
      
  //     case "ROLE_formateur" : {
  //       this.navbars  = [
  //         {key :'home/cours', val:'Gestion des cours'},
  //         {key :'home/matiere', val:'Gestion des matières'},
  //       ]
  //     } break;

  //     case "ROLE_gestApp" : {
  //       this.navbars  = [
  //         {key :'home/apprenant', val:'Gestion des apprenants'},
  //       ]
  //     } break;

  //     case "ROLE_gestStock" : {
  //       this.navbars  = [
  //         {key :'home/stock', val:'Gestion de stock'},
  //       ]
  //     } break;

  //     case "Role_gestRestaurant" : {
  //       this.navbars  = [
  //         {key :'home/restaurant', val:'Gestion du restaurant'},
  //       ]
  //     } break;

  //     case "ROLE_apprenant" : {
  //       this.navbars  = [
  //         {key :'home/sectionDispo', val:'Liste des section disponibles'},
  //         {key :'home/paiement', val:'paiement en ligne'},
  //       ]
  //     } break;



  //     default : this.router.navigate(['welcome']);
  // }
}
  
  navigate(key : string){
    this.router.navigate([key]);
  }

}
