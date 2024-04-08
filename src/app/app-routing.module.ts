import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { LogoutComponent } from './user/logout/logout.component';
import { ForgotPswdComponent } from './user/forgot-pswd/forgot-pswd.component';
import { AddExpenseComponent } from './trip/add-expense/add-expense.component';
import { AddParticipantComponent } from './trip/add-participant/add-participant.component';
import { RemoveParticipantComponent } from './trip/remove-participant/remove-participant.component';
import { ViewExpenseComponent } from './trip/view-expense/view-expense.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'logout', component:LogoutComponent},
  {path: 'forgotPswd', component:ForgotPswdComponent},
  {path:'addExpense', component:AddExpenseComponent},
  {path:'addParticipant', component:AddParticipantComponent},
  {path: 'removeParticipant', component:RemoveParticipantComponent},
  {path: 'viewExpense', component:ViewExpenseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
