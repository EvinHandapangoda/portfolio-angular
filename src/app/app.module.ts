import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { EducationComponent } from './pages/education/education.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MenuScrollComponent } from './common/menu-scroll/menu-scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    EducationComponent,
    SkillsComponent,
    ContactComponent,
    MenuScrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
