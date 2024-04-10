import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})
export class AddExpenseComponent{
item_name : string ="";
exp_category : string = "";
  exp_amount : string = "";
  exp_date : string = "";
  
  constructor(private router: Router){}

  addParticipant : string = '/addParticipant';

  redirectToViewExpense(){
    this.router.navigate(['/viewExpense']);
  }
}
