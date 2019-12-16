import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoginComponent } from "./login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";

import { MatSnackBarModule } from "@angular/material/snack-bar";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatInputModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      declarations: [LoginComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.get(HttpTestingController);
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("good init", () => {
    expect(component.logged).toBeFalsy();
    expect(component.loading).toBeFalsy();
  });

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////// CONNEXION OK //////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  it("connexion done", () => {
    // Test initialisation du test, ici on initialise
    expect(component.logged).toBeFalsy();
    expect(component.username).toEqual("Bret");

    // execution de la methode de test connexion qui se trouve dans le logincomponent
    component.connexion();

    // Attend toi a avoir une requete GET usr telle URL
    const req = httpTestingController.expectOne(
      "https://jsonplaceholder.typicode.com/users?username=" +
        component.username
    );

    // repond a la requete on veut une taille donc on met un tableau
    req.flush([{}]);

    // verification des requetes
    httpTestingController.verify();

    // test du bon déroulement de la methode, on test si tout est ok
    expect(component.logged).toBeTruthy();
  });

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////// CONNEXION PAS D'ACCORD ////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  it("connexion not ok", () => {
    // Test initialisation du test
    expect(component.logged).toBeFalsy();
    expect(component.error).toBeFalsy();

    component.username = "plop";
    // execution de la methode de test
    component.connexion();

    // Attend toi a avoir une requete GET usr telle URL
    const req = httpTestingController.expectOne(
      "https://jsonplaceholder.typicode.com/users?username=" +
        component.username
    );

    // repond a la requete
    req.flush([]);

    // verification
    httpTestingController.verify();

    // test du bon déroulement de la methode
    expect(component.logged).toBeFalsy();
  });
});
