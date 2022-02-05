import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: string;
  passw: string;
  errorMessage: string;
  error: boolean;
  remeber: boolean;

  constructor() {
    this.user = "";
    this.passw = ""
    this.errorMessage = "";
    this.error = false;
    this.remeber = false;
   }

   loggin(){
     if(this.user == "Admin" && this.passw == "123"){
      alert("Donaldo - Done!!!");
     }else{
       this.error = true;
       this.errorMessage = "User or Password incorrect! Verify your information"
       setInterval(this.errorMessage, 200);
     }
   }

  ngOnInit() {
  }

}
