import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './modules/main/main.component';
import {AppRoutingModule} from './app-routing-module';
import {RouterModule} from '@angular/router';
import { HeaderComponent } from './modules/header/header.component';
import { IntroComponent } from './modules/intro/intro.component';
import {MatButtonModule, MatCardModule} from '@angular/material';
import { ProfileSummaryComponent } from './modules/profile-summary/profile-summary.component';
import {TimeDifference} from './services/time-difference';
import { SkillsComponent } from './modules/skills/skills.component';
import { SkillsClipCardComponent } from './modules/shared/skills-clip-card/skills-clip-card.component';
import { WorkExperienceComponent } from './modules/work-experience/work-experience.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    IntroComponent,
    ProfileSummaryComponent,
    SkillsComponent,
    SkillsClipCardComponent,
    WorkExperienceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [TimeDifference],
  bootstrap: [AppComponent]
})
export class AppModule { }
