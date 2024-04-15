import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-view-expense',
  templateUrl: './view-expense.component.html',
  styleUrls: ['./view-expense.component.scss']
})
export class ViewExpenseComponent implements OnInit{
  addParticipant : string = "/addParticipant";
  addExpense : string = "/addExpense";
  expenses : any[] = [];

  constructor(private apiService: ApiService,
              private sessionService: SessionService
  ){}

  ngOnInit(): void {
    this.viewExpenseDetails();
  }

  viewExpenseDetails(){    
    this.apiService.getExpenseApi(this.sessionService.getUserSession()).subscribe(
      (response : any)=>{
        this.expenses = response;
      },
      err => {
        console.log(err);
      }
    );
  }

  deleteExpense(expense:any){
    console.log(expense);
  }
}
