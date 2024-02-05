import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RegistrationsuccessComponent } from './components/registrationsuccess/registrationsuccess.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { ApprovalstatusComponent } from './components/approvalstatus/approvalstatus.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { ClaimlistComponent } from './components/claimlist/claimlist.component';
import { RegistrationuserComponent } from './components/registrationuser/registrationuser.component';
import { AddmanagerComponent } from './components/addmanager/addmanager.component';
import { ManagerdashboardComponent } from './components/managerdashboard/managerdashboard.component';
import { ManagerlistComponent } from './components/managerlist/managerlist.component';
import { ManagerprofileComponent } from './components/managerprofile/managerprofile.component';
import { ClaimlistadminComponent } from './components/claimlistadmin/claimlistadmin.component';
import { DatalistComponent } from './components/datalist/datalist.component';
import { DatalistadminComponent } from './components/datalistadmin/datalistadmin.component';
import { ChatComponent } from './components/chat/chat.component';
import { PopupComponent } from './components/popup/popup.component';
import { CompanylistComponent } from './components/companylist/companylist.component';
import { CompanylistadminComponent } from './components/companylistadmin/companylistadmin.component';
import { QRCodeModule } from 'angular2-qrcode';
import { NgChartsModule } from 'ng2-charts';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    RegistrationsuccessComponent,
    UserdashboardComponent,
    AdmindashboardComponent,
    HeaderComponent,
    FooterComponent,
    UserprofileComponent,
    ApprovalstatusComponent,
    UserlistComponent,
    WelcomepageComponent,
    ClaimlistComponent,
    RegistrationuserComponent,
    AddmanagerComponent,
    ManagerdashboardComponent,
    ManagerlistComponent,
    ManagerprofileComponent,
    ClaimlistadminComponent,
    DatalistComponent,
    DatalistadminComponent,
    ChatComponent,
    PopupComponent,
    CompanylistComponent,
    CompanylistadminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent, RegistrationComponent]
})
export class AppModule { }
