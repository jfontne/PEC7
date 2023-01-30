import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public userForm: FormGroup;

constructor(private fb:FormBuilder, private userS:UserServiceService){
  this.userForm = this.fb.group({             
    username: [null, [Validators.required]],         
    password: [null, [Validators.required, Validators.minLength(4)]],
   });
}
createUSR() {
  console.log(this.userForm.value);
  this.userS.registerUsr(this.userForm.value).subscribe((res:any)=>{
    console.log(`msg: ${this.userForm.value}`);
  },(err)=>{
    console.log(`error: ${err.error.msg}`);
  })
}

}
