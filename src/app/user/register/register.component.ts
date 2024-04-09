import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  reg_userName: string = "";
  reg_contactNumber: number = 0;
  reg_pswd: string = "";
  reg_cfm_pswd : string = "";
}
