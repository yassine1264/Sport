import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  constructor(private formbuilder: FormBuilder,
    private userService: UserService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.signupForm = this.formbuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.email, Validators.required]],
      pwd: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]],
    })
  }
  signup() {
    console.log("here user", this.signupForm.value);
    this.userService.signup(this.signupForm.value).subscribe(
      (result)=>{
        this.router.navigate(['signin']);


      }
    );
  }

}
