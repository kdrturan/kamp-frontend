import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginForm:FormGroup
  constructor(private formBuilder:FormBuilder){}
  ngOnInit(): void {
    this.creeateLoginForm();
  }



  creeateLoginForm(){
    this.loginForm = this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }


}
