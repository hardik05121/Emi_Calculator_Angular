import { Component } from '@angular/core';
import { FormGroup,FormControl, FormControlName,Validators} from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
   title= 'contact form';

  ContactUs = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z]+$")]),
    email:new FormControl('',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    phone: new FormControl('',[Validators.required,Validators.pattern('[7-9]{1}[0-9]{9}')]),
    message: new FormControl('',)
  }) 

  contact(){
    console.warn(this.ContactUs.value)
  }
  get name(){
    return this.ContactUs.get('name');
  }
  get email(){
    return this.ContactUs.get('email');
  }
  get phone(){
    return this.ContactUs.get('phone');
  }
 
}
