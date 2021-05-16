import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { AdminComponent } from './admin/admin.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { RegistartionComponent } from './registartion/registartion.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SharedModule } from './shared/components/shared.module'



const appRoutes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login', component: DashboardComponent },
  { path: 'register', component: RegistartionComponent },
  { path: 'register', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', component: SidebarComponent},
        { path: '', component: HeaderComponent}
        
        
    ] },


  // { path: 'sidebar', component: SidebarComponent }, //direct aproach
  // { path: 'header', component: HeaderComponent }, //direct aproach
 
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    AdminComponent,
    LandingpageComponent,
    RegistartionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(appRoutes),
    RouterModule.forChild(appRoutes),
    
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
