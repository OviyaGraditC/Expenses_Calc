import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { LogoutComponent } from './user/logout/logout.component';
import { ForgotPswdComponent } from './user/forgot-pswd/forgot-pswd.component';
import { AddParticipantComponent } from './trip/add-participant/add-participant.component';
import { RemoveParticipantComponent } from './trip/remove-participant/remove-participant.component';
import { AddExpenseComponent } from './trip/add-expense/add-expense.component';
import { ViewExpenseComponent } from './trip/view-expense/view-expense.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    ForgotPswdComponent,
    AddParticipantComponent,
    RemoveParticipantComponent,
    AddExpenseComponent,
    ViewExpenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
