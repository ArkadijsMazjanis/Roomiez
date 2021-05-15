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


const appRoutes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login', component: DashboardComponent },
  { path: 'register', component: RegistartionComponent },
  { path: 'register', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
 
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    AdminComponent,
    LandingpageComponent,
    RegistartionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
