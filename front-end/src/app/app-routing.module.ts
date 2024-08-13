import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { UsersComponent } from './users/users.component';
import { ImageComponent } from './login/image/image.component';
import { MatTestComponent } from './mat-test/mat-test.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CandidatComponent } from './candidat/candidat.component';
import { StockComponent } from './stock/stock.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { ApprenantComponent } from './apprenant/apprenant.component';
import { FormateurComponent } from './formateur/formateur.component';
import { CoursComponent } from './cours/cours.component';
import { SessionsComponent } from './sessions/sessions.component';
import { SectionsComponent } from './sections/sections.component';
import { GroupesComponent } from './groupes/groupes.component';
import { StagesComponent } from './stages/stages.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { SectionDispoComponent } from './section-dispo/section-dispo.component';
import { PaiementComponent } from './paiement/paiement.component';
import { MatiereComponent } from './matiere/matiere.component';
import { AddCandidatComponent } from './candidat/add-candidat/add-candidat.component';
import { CandidatListComponent } from './candidat/candidat-list/candidat-list.component';
import { AddSectionComponent } from './sections/add-section/add-section.component';
import { ListSectionComponent } from './sections/list-section/list-section.component';
import { AddApprenantComponent } from './apprenant/add-apprenant/add-apprenant.component';
import { ApprenantListComponent } from './apprenant/apprenant-list/apprenant-list.component';

const routes: Routes = [
 {path: 'welcome' , component : WelcomeComponent},
  { path: 'home', component: HomeComponent , children : [
    { path: 'users', component: UsersComponent },
    { path: 'candidat', component: CandidatComponent , children : [
      {path : 'add', component  : AddCandidatComponent},
      {path : 'list', component  : CandidatListComponent}
    ]},
    { path: 'stock', component: StockComponent },
    { path: 'restaurant', component: RestaurantComponent },
    { path: 'apprenant', component:  ApprenantComponent, children: [
      {path: 'list', component : ApprenantListComponent },
      {path: 'add', component : AddApprenantComponent },
    ]},
    { path: 'formateur', component:  FormateurComponent},
    { path: 'cours', component:  CoursComponent},
    { path: 'sessions', component:  SessionsComponent},
    { path: 'sections', component:  SectionsComponent , children : [
      {path : 'add' , component : AddSectionComponent},
      {path : 'list' , component : ListSectionComponent},
    ]},
    { path: 'groupes', component: GroupesComponent },
    { path: 'stages', component: StagesComponent },
    { path: 'entreprises', component: EntrepriseComponent },
    { path: 'sectionDispo', component: SectionDispoComponent },
    { path: 'paiement', component: PaiementComponent },
    { path: 'matiere', component: MatiereComponent },
    
    ]
  },
  { path: 'login', component: LoginComponent  },
  {path : 'image' , component : ImageComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  
  { path: 'test', component: MatTestComponent },
  
  { path: '', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
