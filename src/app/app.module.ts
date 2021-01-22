import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* FormsModule */
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
/* Angular Material */
import { AngularMaterialModule } from './AngularMaterial/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Routing */
import { AppRoutingModule } from './routing/app-routing.module';

import { AppComponent } from './app.component';


 /*Angular Flex Layout */
import { FlexLayoutModule } from '@angular/flex-layout';

/*Components*/
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponentComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
