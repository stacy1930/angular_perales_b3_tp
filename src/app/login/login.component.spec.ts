import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoginComponent } from "./login.component";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import {
  MatSpinner,
  MatProgressSpinnerModule
} from "@angular/material/progress-spinner";
import { HttpClientModule } from "@angular/common/http";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatInputModule,
        MatSpinner,
        MatProgressSpinnerModule,
        HttpClientModule
      ],
      declarations: [LoginComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Connexion", () => {
    expect(component).toBeTruthy();
  });
});
