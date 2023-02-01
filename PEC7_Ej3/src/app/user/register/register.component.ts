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
  public msg: string;

constructor(private fb:FormBuilder, private userS:UserServiceService){
  this.userForm = this.fb.group({             
    username: [null, [Validators.required]],         
    password: [null, [Validators.required, Validators.minLength(4)]],
   });
   this.msg = '';
}
createUSR() {
  console.log(this.userForm.value);
  this.userS.registerUsr(this.userForm.value).subscribe((res:any)=>{
    this.msg = res.msg;
  },(err)=>{
    this.msg = err.error.msg;
  })
}

}
