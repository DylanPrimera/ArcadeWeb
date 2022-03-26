import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WebComponent } from './components/smarts/web/web.component';
import { NavbarComponent } from './components/dummies/navbar/navbar.component';
import { CompaniesComponent } from './components/dummies/companies/companies.component';
import { FooterComponent } from './components/dummies/footer/footer.component';
import { ContactFormComponent } from './components/dummies/contact-form/contact-form.component';
import { NumbersComponent } from './components/dummies/numbers/numbers.component';
import { PrincipalDataComponent } from './components/dummies/principal-data/principal-data.component';
import { AboutUsComponent } from './components/dummies/about-us/about-us.component';
import { OurProjectsComponent } from './components/dummies/our-projects/our-projects.component';
import { OurServicesComponent } from './components/dummies/our-services/our-services.component';
import { AditionalInformationComponent } from './components/dummies/aditional-information/aditional-information.component';


@NgModule({
  declarations: [
    AppComponent,
    WebComponent,
    NavbarComponent,
    CompaniesComponent,
    FooterComponent,
    ContactFormComponent,
    NumbersComponent,
    PrincipalDataComponent,
    AboutUsComponent,
    OurProjectsComponent,
    OurServicesComponent,
    AditionalInformationComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
