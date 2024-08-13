import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import {MatTableModule} from '@angular/material/table';
import { MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule } from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import { ScrollingModule } from '@angular/cdk/scrolling';
import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { UsersComponent } from './users/users.component';
import { MenuComponent } from './menu/menu.component';
import { ImageComponent } from './login/image/image.component';
import { CdkTableModule } from '@angular/cdk/table';

import {BrowserAnimationsModule}  from '@angular/platform-browser/animations';
import { MatTestComponent } from './mat-test/mat-test.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
//import { WelcomeComponent } from './welcome/welcome.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CandidatComponent } from './candidat/candidat.component';
import { StockComponent } from './stock/stock.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { BoardResrelentComponent } from './board-resrelent/board-resrelent.component';
import { BoardComponent } from './board/board.component';
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
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { AddCandidatComponent } from './candidat/add-candidat/add-candidat.component';
import { CandidatListComponent } from './candidat/candidat-list/candidat-list.component';
import { AddSectionComponent } from './sections/add-section/add-section.component';
import { ListSectionComponent } from './sections/list-section/list-section.component';
import { AddApprenantComponent } from './apprenant/add-apprenant/add-apprenant.component';
import { ApprenantListComponent } from './apprenant/apprenant-list/apprenant-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    UsersComponent,
    MenuComponent,
    ImageComponent,
    MatTestComponent,
   // WelcomeComponent,
    SidebarComponent,
    CandidatComponent,
    StockComponent,
    RestaurantComponent,
    BoardResrelentComponent,
    BoardComponent,
    ApprenantComponent,
    FormateurComponent,
    CoursComponent,
    SessionsComponent,
    SectionsComponent,
    GroupesComponent,
    StagesComponent,
    EntrepriseComponent,
    SectionDispoComponent,
    PaiementComponent,
    MatiereComponent,
    AddCandidatComponent,
    CandidatListComponent,
    AddSectionComponent,
    ListSectionComponent,
    AddApprenantComponent,
    ApprenantListComponent
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  BrowserAnimationsModule,
  HttpClientModule,
   ScrollingModule,
   CdkTableModule,
   MatTableModule,
   BrowserAnimationsModule,
   MatInputModule,
   MatPaginatorModule,
   MatSortModule,
   MatProgressSpinnerModule,
   MatPaginatorModule,
   ReactiveFormsModule,
   MatDatepickerModule,
   MatFormFieldModule,
   MatInputModule,
   MatNativeDateModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
