import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import IUser from "../models/IUser";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  mdp: string;
  loginForm: FormGroup;
  loading = false;
  logged = false;
  username = "Bret";
  error = false;

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  ngOnInit() {}

  connexion() {
    this.loading = true;

    this.http
      .get(
        "https://jsonplaceholder.typicode.com/users?username=" + this.username
      ) // Retourne un observable
      .subscribe(
        (value: IUser[]) => {
          console.log("get: ", this.username, value.length);
          //       console.log(value[0].company.name);
          if (value.length === 1) {
            this.logged = true;
            this.snackBar.open("Vous êtes connecté", null, {
              duration: 2000
            });
          } else {
            this.error = true;
            this.loading = false;
            this.snackBar.open("Connexion échoué", null, {
              duration: 2000
            });
          }
        },
        (error1: HttpErrorResponse) => {
          console.log("erreur1", error1);
          this.loading = false;
        },
        () => {
          this.loading = false;
        }
      );
  }
}
