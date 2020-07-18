import { Subscription } from 'rxjs/Subscription';
import { UserDetails, AlertNotificationSubject, dialogTypes } from './../../tunisian-got-talent/models/user.model';
import { GlobalService } from "./../../tunisian-got-talent/services/global.service";
import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "authentification",
  templateUrl: "./authentification.component.html",
  styleUrls: ["./authentification.component.css"],
})
export class authentificationComponent implements OnInit {
  form: FormGroup;
  showLoginForm: boolean = true;

  constructor(private globalService: GlobalService, private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
    this.globalService.getConnectedUser().subscribe(connectedUser=>{
      connectedUser ? this.showLoginForm = false : this.showLoginForm = true;
    })
  }

  initForm() {
    this.form = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  validate() {
    if (this.form.valid) {
      let userDetails: UserDetails = new UserDetails();
      userDetails.username = this.form.get('username').value;
      userDetails.password = this.form.get('password').value;
      this.globalService.authenticate(userDetails).subscribe(result=>
        {
          if (result instanceof Object) {
            this.globalService.setConnectedUser(result);
            AlertNotificationSubject.next({
              dialogType: dialogTypes.SUCCESS,
              message: 'Welcome to your Tunisian got talent dashboard',
              okBtn: true
            });
          } else {
            this.globalService.setConnectedUser(null);
            AlertNotificationSubject.next({
              dialogType: dialogTypes.SUCCESS,
              message: result,
              okBtn: true
            });
          }
        })
    }
    
  }
}
