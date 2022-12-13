import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public myFormGroup = new FormGroup({
    myName: new FormControl('', [
      Validators.required
    ]),
    myEmail: new FormControl('', [

    ])
  })

}
