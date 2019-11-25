import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  login: string;
  mdp: string;
  loginForm: FormGroup;
  submitted = false;

  connexion() {
    console.log("login", this.login);
    console.log("mdp", this.mdp);
  }
  onSubmit() {}
  constructor() {}

  ngOnInit() {}
}
