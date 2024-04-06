import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  checkSession(ssKey:string){
   let ssValue = sessionStorage.getItem(ssKey) || "";
    if(ssValue == ""){
      return false;
    }else{
      return true;
    }
  }

  setSession(ssKey: string, ssValue:string){
    sessionStorage.setItem(ssKey, ssValue);
  }

  deleteSession(ssKey:string){
    sessionStorage.removeItem(ssKey);
    console.log(ssKey + " : Session Removed Successfuly");
  }
}
