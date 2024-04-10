import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  userName: string = "";
  pswd: string = "";
  msg : string = "";

  ngOnInit(): void {

    this.userName = "Dinesh";
  }

  constructor(private sessionService: SessionService, 
              private router: Router,
              private httpClient: HttpClient){}

  checkLogin(){
    let isSuccess = false;
    let apiUrl = "https://retoolapi.dev/EYB0o0/expenseCalcLogin" + "?username=" + this.userName + "&password=" + this.pswd;
    this.httpClient.get(apiUrl).subscribe(
      (users: any)=>{
        console.log(users);        
          if(users && users.length > 0 && users[0].username == this.userName && users[0].password == this.pswd){
            this.sessionService.setSession("User", this.userName);
            this.router.navigate(['/addExpense']);
          }else{
            this.msg = "Failed";
          }
      },
      err=>{
        console.log(err);
      }
    );



//   this.httpClient.get("https://retoolapi.dev/EYB0o0/expenseCalcLogin").subscribe(
//   (users: any)=>{
//     console.log(users);
//     for(let user of users){
//       if(user.username == this.userName && user.password == this.pswd){
//         isSuccess = true;
//         break;
//       }
//     }
//     if(isSuccess){
//       this.sessionService.setSession("User", this.userName);
//       this.router.navigate(['/addExpense']);
//     }else{
//       this.msg = "Failed";
//     }
//   },
//   err=>{
//     console.log(err);
//   }
// );

// let add = ()=>{};
// add();

    // if(this.userName == "Dinesh" && this.pswd == "123"){
    //   this.msg = "Success";
    //   this.sessionService.setSession("User", this.userName);
    //   this.router.navigate(['/addExpense']);
    // }
    // else{
    //   this.msg = "Failed";
    // }
  }

}
