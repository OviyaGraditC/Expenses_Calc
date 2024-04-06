import { Component, OnInit } from '@angular/core';
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

  constructor(private sessionService: SessionService){}

  checkLogin(){
    if(this.userName == "Dinesh" && this.pswd == "123"){
      this.msg = "Success";
      this.sessionService.setSession("User", this.userName);
    }
    else{
      this.msg = "Failed";
    }
  }

}
