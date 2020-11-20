import { Component, OnInit } from '@angular/core';
import { RegisterService } from './services/register.service';
import { Visitor } from '../shared/backendModels/interfaces';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../form-login/components/login/services/login.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService, private router: Router, public snackBar: MatSnackBar,
              private loginService: LoginService) { }

  submitRegister(formValue): void {
    const visitor: Visitor = new Visitor();
    visitor.username = formValue.username;
    visitor.name = formValue.name;
    visitor.phoneNumber = formValue.phoneNumber;
    visitor.password = formValue.password;
    visitor.acceptedCommercial = formValue.acceptedCommercial;
    visitor.acceptedTerms = formValue.acceptedTerms;
    visitor.userType = false;

    this.registerService.registerVisitor(visitor).subscribe(
      // Si todo va bien
      (visitorResult: Visitor) => {
        console.log(JSON.stringify(visitorResult))
        this.loginService.login(visitorResult.username, visitorResult.password)
      }, // Si hay error
      (err) =>  this.snackBar.open(err.error.message, 'OK', {
        duration: 5000,
      })
    );
  }
  ngOnInit() {
  }

}
