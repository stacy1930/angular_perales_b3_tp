import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  login: string;
  mdp: string;
  loginForm: FormGroup;
  loading = false;
  logged = false;

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get("https://jsonplaceholder.typicode.com/users")
      .subscribe(value => {
        console.log(value);
      });

    console.log("ici");
  }

  connexion() {
    this.loading = true;

    setTimeout(() => {
      if (this.login === "admin" && this.mdp === "admin") {
        this.logged = true;
        this.snackBar.open("Vous êtes connecté", null, {
          duration: 2000
        });
      } else {
        this.loading = false;
        this.snackBar.open("Echec", null, {
          duration: 2000
        });
      }
    }, 2000);
  }
}
