import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from  '@angular/router';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {
  signUpForm!: FormGroup;
  isRegistered = false;
  errorMsg = '';
  validMailOtp = '';
  validContactOtp = '';

  constructor(
    private fb: FormBuilder,
    private routes : Router
  ) {}

  ngOnInit(){
    this.createForm();
  }

  toggleMode(){
    this.isRegistered = !this.isRegistered;
    this.createForm();
  }

  createForm() {
    if (this.isRegistered) {
      this.signUpForm = this.fb.group({
        email : ['',Validators.required],
        password : ['',Validators.required]
      })
    } else {
      this.signUpForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.required],
        contact: ['', Validators.required],
        password: ['', Validators.required],
        reEnterPassword: ['', Validators.required],
      });
    }
  }

  loginValidation() {
    this.errorMsg = '';
    if(this.signUpForm.invalid){
      this.signUpForm.markAllAsTouched();
      return
    }
    if (this.isRegistered) {
      if(this.isUserValid()){
        this.routes.navigate(['/home'])
      }else {
        return
      }
    } else {
      if(this.validateSignUp()){
        const existingData = localStorage.getItem('userData')
        const userDataList = existingData ? JSON.parse(existingData) : [];
        userDataList.push(this.signUpForm.value);
        localStorage.setItem("userData",JSON.stringify(userDataList));
      }else{
        return console.log(this.errorMsg);
      }
      console.log('Sign Up', this.signUpForm.value);
    }
    return [];
  }

  validateSignUp(){
    if(!this.matchPassword()){
      this.errorMsg = "Password Not matched";
      return false;
    } else if(this.duplicateUser()){
      this.errorMsg = "User Already Present";
      console.log(this.errorMsg);
      return false;
    }
    return true;
  }

  matchPassword(){
    if(this.signUpForm.get('password')?.value === this.signUpForm.get('reEnterPassword')?.value)
      return true
    return false
  }

  duplicateUser(){
    const userData = localStorage.getItem('userData');
    if(userData && JSON.parse(userData).find((x:any)=>(x.contact === this.signUpForm.get('contact')?.value || x.email === this.signUpForm.get('email')?.value))){
      return true;
    }
    return false;
  }

  getMailOtp(){
    this.validMailOtp = Math.random().toFixed(6)
    console.log(this.validMailOtp)
  }

  getContactOtp(){
    this.validContactOtp = Math.random().toFixed(6)
    console.log(this.validContactOtp)
  }

  isUserValid(){
    const userData = localStorage.getItem('userData');
    const parseData = userData ? JSON.parse(userData) : '';
    if(parseData){
      const loggedEmail = parseData.find((x:any)=>{
        return x.email === this.signUpForm.get('email')?.value
      });

      if(!loggedEmail){
         this.errorMsg = "Enter Valid Email"
        return false
      }
      
      if(loggedEmail.password === this.signUpForm.get('password')?.value){
        return true
      }
    }
    this.errorMsg = "Enter Valid Email"
    return false
    // call stored user
  }
}
