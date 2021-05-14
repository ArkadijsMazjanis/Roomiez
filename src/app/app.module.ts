import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { AdminComponent } from './admin/admin.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
// import { TasksComponent } from './tasks/tasks.model'
// import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component'




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    AdminComponent,
    LandingpageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
     {
        path: 'login',
        component: LoginComponent
      },
      {
        path: '',
        component: LandingpageComponent
      },
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
