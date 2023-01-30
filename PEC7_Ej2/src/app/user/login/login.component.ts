
import { Component } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
public message:string = ''; 
public userForm: FormGroup;

constructor(private fb:FormBuilder, private userS:UserServiceService){
  this.userForm = this.fb.group({             
    username: [null, [Validators.required]],         
    password: [null, [Validators.required, Validators.minLength(4)]],
   });
}
loginUSR() {

  //console.log(this.userForm.value);
  this.userS.loginUsr(this.userForm.value).subscribe((res:any)=>{
    this.message = res.msg;
    console.log(`msg: ${this.userForm.value}`);
  },(err)=>{
    this.message = err.error.msg;
    
  });
}




}
