import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectService } from './project.service';
import { ProjectModule } from './project/project.module';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    PortfolioComponent,
    ServicesComponent,
    ProjectsComponent,
    ProjectDetailComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyApgVIzcms0jSEz4DeLiqQgjxnwLgSzmJs'
    })
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
