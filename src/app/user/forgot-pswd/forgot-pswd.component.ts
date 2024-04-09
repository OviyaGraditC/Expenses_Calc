import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-pswd',
  templateUrl: './forgot-pswd.component.html',
  styleUrls: ['./forgot-pswd.component.scss']
})
export class ForgotPswdComponent {
  forget_userName: string = "";
  msg : string = "";
}
