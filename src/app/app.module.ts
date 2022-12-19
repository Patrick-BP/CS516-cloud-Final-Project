import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutmeComponent } from './aboutme.component';
import { ResumeComponent } from './resume.component';
import { SidebarComponent } from './sidebar.component';
import { NavbarComponent } from './navbar.component';
import { PorpofolioComponent } from './porpofolio.component';
import { BlogComponent } from './blog.component';
import { ContactComponent } from './contact.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    ResumeComponent,
    SidebarComponent,
    NavbarComponent,
    PorpofolioComponent,
    BlogComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
