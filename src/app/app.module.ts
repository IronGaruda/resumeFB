import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { IntroboxComponent } from './introbox/introbox.component';
import { SkillboxComponent } from './skillbox/skillbox.component';
import { ExprojectComponent } from './exproject/exproject.component';
import { ProjectContainerComponent } from './components/project-container/project-container.component';
import { ContactComponent } from './contact/contact.component';
import { ThemeButtonComponent } from './theme-button/theme-button.component';
import { AnimationHelperComponent } from './components/animation-helper/animation-helper.component';
import { ApiCallComponent } from './api-call/api-call.component';
import { ProjectGofilesComponent } from './components/project-gofiles/project-gofiles.component';
import { ProjectR2Component } from './components/project-r2/project-r2.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroboxComponent,
    SkillboxComponent,
    ExprojectComponent,
    ProjectContainerComponent,
    ContactComponent,
    ThemeButtonComponent,
    AnimationHelperComponent,
    ApiCallComponent,
    ProjectGofilesComponent,
    ProjectR2Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
