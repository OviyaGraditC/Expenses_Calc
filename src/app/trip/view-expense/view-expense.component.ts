import { Component, Input, OnInit } from '@angular/core';
import { GlobalConstant } from 'src/app/common/global.constant';
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
  userLgType : string = "";

  @Input() count : number=0;

  constructor(private apiService: ApiService,
              private sessionService: SessionService
  ){}

  ngOnInit(): void {
    this.viewExpenseDetails();
  }

  viewExpenseDetails(){  
    
    this.userLgType = this.sessionService.getSession(GlobalConstant.userLgType) || "";
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

  updateExpense(expense:any){
    console.log("Update Expense");
    console.log(expense);
  }
}
