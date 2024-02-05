import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { ApprovalstatusComponent } from './components/approvalstatus/approvalstatus.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RegistrationsuccessComponent } from './components/registrationsuccess/registrationsuccess.component';
import { RegistrationuserComponent } from './components/registrationuser/registrationuser.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { AdminGuard } from './guards/admin.guard';
import { ManagerGuard } from './guards/manager.guard';
import { RouterGuard } from './guards/router.guard';
import { UserGuard } from './guards/user.guard';
import { ClaimlistComponent } from './components/claimlist/claimlist.component';
import { ClaimlistadminComponent } from './components/claimlistadmin/claimlistadmin.component';
import { AddmanagerComponent } from './components/addmanager/addmanager.component';
import { ManagerdashboardComponent } from './components/managerdashboard/managerdashboard.component';
import { ManagerlistComponent } from './components/managerlist/managerlist.component';
import { ManagerprofileComponent } from './components/managerprofile/managerprofile.component';
import { DatalistComponent } from './components/datalist/datalist.component';
import { DatalistadminComponent } from './components/datalistadmin/datalistadmin.component';
import { ChatComponent } from './components/chat/chat.component';
import { CompanylistComponent } from './components/companylist/companylist.component';
import { CompanylistadminComponent } from './components/companylistadmin/companylistadmin.component';

const routes: Routes = [
  { path: '', component: WelcomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'registrationuser', component: RegistrationuserComponent },
  { path: 'registrationsuccess', component: RegistrationsuccessComponent },
  { path: 'chat', component: ChatComponent, canActivate: [RouterGuard] },
  { path: 'companyList', component: CompanylistComponent, canActivate: [RouterGuard] },
  { path: 'companyListAdmin', component: CompanylistadminComponent, canActivate: [RouterGuard] },
  { path: 'admindashboard', component: AdmindashboardComponent, canActivate: [AdminGuard] },
  { path: 'userdashboard', component: UserdashboardComponent, canActivate: [UserGuard] },
  { path: 'addManager', component: AddmanagerComponent, canActivate: [RouterGuard] },
  { path: 'managerdashboard', component: ManagerdashboardComponent, canActivate: [ManagerGuard] },
  { path: 'managerlist', component: ManagerlistComponent, canActivate: [RouterGuard] },
  { path: 'managerprofile', component: ManagerprofileComponent, canActivate: [RouterGuard] },
  { path: 'approvemanager', component: ApprovalstatusComponent, canActivate: [RouterGuard] },
  { path: 'userlist', component: UserlistComponent, canActivate: [RouterGuard] },
  { path: 'claimlist', component: ClaimlistComponent, canActivate: [RouterGuard] },
  { path: 'dataBaselist', component: DatalistComponent, canActivate: [RouterGuard] },
  { path: 'claimlistadmin', component: ClaimlistadminComponent, canActivate: [RouterGuard] },
  { path: 'datalistadmin', component: DatalistadminComponent, canActivate: [RouterGuard] },
  { path: 'edituserprofile', component: UserprofileComponent, canActivate: [UserGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
