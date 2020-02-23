import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-liste-utilisateur",
  templateUrl: "./liste-utilisateur.component.html",
  styleUrls: ["./liste-utilisateur.component.scss"]
})
export class ListeUtilisateurComponent implements OnInit {
  lien = "https://jsonplaceholder.typicode.com/users";
  utilisateurs: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.lien).subscribe(response => {
      this.utilisateurs = response;
    });
  }
}
