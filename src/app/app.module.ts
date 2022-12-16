import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponent/todos/todos.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ElevatorsComponent } from './elevators/elevators.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { ContactusComponent } from './contactus/contactus.component';

const appRoute: Routes = [
  {path : '', component : HomeComponent},
  {path : 'Home', component : HomeComponent},
  {path : 'AboutUS', component : AboutusComponent},
  {path : 'Elevators', component : ElevatorsComponent},
  {path : 'Services', component : ServicesComponent},
  {path : 'ContactUs', component : ContactusComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ElevatorsComponent,
    AboutusComponent,
    ServicesComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
