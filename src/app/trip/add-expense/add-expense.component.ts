import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
              private sessionService : SessionService){}

  ngOnInit(): void {
    this.sessionService.checkUserSession();
  }

  addParticipant : string = '/addParticipant';

  redirectToViewExpense(){
    this.router.navigate(['/viewExpense']);
  }
}
