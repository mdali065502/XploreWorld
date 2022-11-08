import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './Contact/contact/contact.component';
import { FooterComponent } from './Footer/footer/footer.component';
import { NavComponent } from './Navbar/nav/nav.component';
import { ContentComponent } from './Content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    FooterComponent,
    NavComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
