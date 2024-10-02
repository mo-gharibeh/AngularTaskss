import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { SubServicesComponent } from './sub-services/sub-services.component';
import { LectureComponent } from './lecture/lecture.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SingleSubServiceComponent } from './single-sub-service/single-sub-service.component';
import { RegistrationUserComponent } from './registration-user/registration-user.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { AddServiceComponent } from './Admin/add-service/add-service.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ServicesComponent,
    SubServicesComponent,
    LectureComponent,
    SubscriptionComponent,
    SingleSubServiceComponent,
    RegistrationUserComponent,
    LoginComponent,
    DashboardComponent,
    AddServiceComponent
  ],
  imports: [
    FormsModule,
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "", component: ServicesComponent, pathMatch: "full" },
      { path: "services", component: ServicesComponent },
      { path: "SubServices/:id", component: SubServicesComponent },
      { path: "lecture", component: LectureComponent },
      { path: "subscription", component: SubscriptionComponent },
      { path: "singleSubService/:id", component: SingleSubServiceComponent },
      { path: "register", component: RegistrationUserComponent },
      { path: "register", component: RegistrationUserComponent },
      { path: "login", component: LoginComponent },
      {
        path: "dashboard", component: DashboardComponent, children: [
          { path: "addService", component: AddServiceComponent },
          { path: "**", component: DashboardComponent }
        ]
      },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
