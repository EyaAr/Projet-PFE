import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { AccountComponent } from './examples/account/account.component';
import { ClaimComponent } from './examples/claim/claim.component';
import { ClaimlistComponent } from './examples/claimlist/claimlist.component';
import { DatabaseComponent } from './examples/database/database.component';
import { CompanyComponent } from './examples/company/company.component';
import { CompanylistComponent } from './examples/companylist/companylist.component';
import { DatabaselistComponent } from './examples/databaselist/databaselist.component';
import { HomeComponent } from './examples/home/home.component';
import { AddUserComponent } from './examples/add-user/add-user.component';
import { UserListComponent } from './examples/user-list/user-list.component';
import { ApprovalstatusComponent } from './examples/approvalstatus/approvalstatus.component';
import { ManagersListComponent } from './examples/managers-list/managers-list.component';
import { ManagerProfileComponent } from './examples/manager-profile/manager-profile.component';
import { UserProfileComponent } from './examples/user-profile/user-profile.component';
import { GuideComponent } from './examples/guide/guide.component';

const routes: Routes =[
 
    { path: 'index',                component: ComponentsComponent },
    { path: 'nucleoicons',          component: NucleoiconsComponent },
    { path: 'examples/guide',          component: GuideComponent },
    { path: 'examples/landing',     component: LandingComponent },
    { path: 'examples/login',       component: LoginComponent },
    { path: 'examples/account',       component: AccountComponent },
    { path: 'examples/claim',       component: ClaimComponent },
    { path: 'examples/claimlist',       component: ClaimlistComponent },
    { path: 'examples/database',       component: DatabaseComponent },
    { path: 'examples/informations',     component: ProfileComponent },
    { path: 'examples/company',     component: CompanyComponent },
    { path: 'examples/companylist',     component: CompanylistComponent },
    { path: 'examples/databaselist',     component: DatabaselistComponent },
    { path: 'examples/home',     component: HomeComponent },
    { path: 'examples/add-user',     component: AddUserComponent },
    { path: 'examples/user-list',     component: UserListComponent },
    { path: 'examples/approvalstatus',     component: ApprovalstatusComponent },
    { path: 'examples/managers-list',     component: ManagersListComponent },
    { path: 'examples/manager-profile',     component: ManagerProfileComponent },
    { path: 'examples/user-profile',     component: UserProfileComponent },
    { path: '', redirectTo: 'index', pathMatch: 'full' }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
