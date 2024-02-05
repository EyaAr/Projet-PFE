import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { AgmCoreModule } from '@agm/core';
import {RouterModule} from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ExamplesComponent } from './examples.component';
import { AccountComponent } from './account/account.component';
import { ClaimComponent } from './claim/claim.component';
import { DatabaseComponent } from './database/database.component';
import { CompanyComponent } from './company/company.component';
import { HttpClientModule } from '@angular/common/http';
import { CompanylistComponent } from './companylist/companylist.component';
import { DatabaselistComponent } from './databaselist/databaselist.component';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { ClaimlistComponent } from './claimlist/claimlist.component';
import { ApprovalstatusComponent } from './approvalstatus/approvalstatus.component';
import { ManagersListComponent } from './managers-list/managers-list.component';
import { ManagerProfileComponent } from './manager-profile/manager-profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { GuideComponent } from './guide/guide.component';
import { ChatComponent } from './chat/chat.component';
import { PopupComponent } from './popup/popup.component';





@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        JwBootstrapSwitchNg2Module,
        AgmCoreModule.forRoot({
            apiKey: 'YOUR_KEY_HERE'
        })
    ],
    declarations: [
        LandingComponent,
        LoginComponent,
        ExamplesComponent,
        ProfileComponent,
        AccountComponent,
        ClaimComponent,
        DatabaseComponent,
        CompanyComponent,
        CompanylistComponent,
        DatabaselistComponent,
        HomeComponent,
        AddUserComponent,
        UserListComponent,
        ClaimlistComponent,
        ApprovalstatusComponent,
        ManagersListComponent,
        ManagerProfileComponent,
        UserProfileComponent,
        GuideComponent,
        ChatComponent,
        PopupComponent,

    ]
})
export class ExamplesModule { }
