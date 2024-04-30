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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddTripComponent } from './trip/add-trip/add-trip.component';
import { ViewTripsComponent } from './trip/view-trips/view-trips.component';
import { PowerPipe } from "./services/powerPipe";


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
        ViewExpenseComponent,
        AddTripComponent,
        ViewTripsComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        PowerPipe
    ]
})
export class AppModule { }
