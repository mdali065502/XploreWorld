import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './Contact/contact/contact.component';
import { ContentComponent } from './Content/content.component';
import { FooterComponent } from './Footer/footer/footer.component';
import { NavComponent } from './Navbar/nav/nav.component';

const routes: Routes = [
 

  {path:'contact',component:ContactComponent},
  {path:'footer',component:FooterComponent},
  {path:'**',component:ContentComponent},
   
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
