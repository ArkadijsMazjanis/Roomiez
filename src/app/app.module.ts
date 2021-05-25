import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { RegistartionComponent } from './registartion/registartion.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SharedModule } from './shared/components/shared.module';
import { TasksComponent } from './tasks/tasks.component';
import { ListComponent } from './list/list.component';
import {MatListModule} from '@angular/material/list';
import { TasklistComponent } from './shared/components/tasklist/tasklist.component';
import { TaskpageComponent } from './taskpage/taskpage.component'; 


const appRoutes: Routes = [
  { path: '', component: LandingpageComponent },  //direct aproach and routs
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistartionComponent },
  { path: 'sidebar', component: SidebarComponent }, 
  { path: 'header', component: HeaderComponent }, 
  { path: 'dashboard', component: DashboardComponent,
    // children: [
    //   { path: '', component: SidebarComponent },
    //   { path: '', component: HeaderComponent }     
    },
  { path: 'taskspage', component: TaskpageComponent }, 
  { path: 'tasklist', component: TasklistComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    AdminComponent,
    LandingpageComponent,
    RegistartionComponent,
    TasksComponent,
    ListComponent,
    TasklistComponent,
    TaskpageComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(appRoutes),
    RouterModule.forChild(appRoutes),
    MatListModule,
    
  ],
  exports: [
    RouterModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
