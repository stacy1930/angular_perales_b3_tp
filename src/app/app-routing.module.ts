import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { PageNotFound404Component } from "./page-not-found404/page-not-found404.component";
import { ListeUtilisateurComponent } from "./liste-utilisateur/liste-utilisateur.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },

  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "listeUtilisateurs", component: ListeUtilisateurComponent },

  // { path: "login", component: HomeComponent } // Non on ne redirige pas comme ca
  { path: "404", component: PageNotFound404Component },

  { path: "**", redirectTo: "/404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
