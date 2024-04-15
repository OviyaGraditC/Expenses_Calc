import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})
export class AddExpenseComponent implements OnInit{
item_name : string ="";
exp_category : string = "";
  exp_amount : string = "";
  exp_date : string = "";
  
  constructor(private router: Router, 
              private sessionService : SessionService,
              private apiService: ApiService){}

  ngOnInit(): void {
    this.sessionService.checkUserSession();
  }

  addParticipant : string = '/addParticipant';


  addExpense(){

    let expenseReq = {
      "amount": this.exp_amount,
      "expDate": this.exp_date,
      "category": this.exp_category,
      "itemName": this.item_name,
      "username": this.sessionService.getUserSession()
    };
    this.apiService.addExpenseApi(expenseReq).subscribe(
      () =>{
        alert("Expense Added SuccesFully");
      },
      err => {
        console.log(err);
      }
    );
  }

  redirectToViewExpense(){
    this.router.navigate(['/viewExpense']);
  }
}
