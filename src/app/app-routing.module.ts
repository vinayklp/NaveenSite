import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

const routes: Routes = [{
  path:'home',
  component: HomeComponent
},
{
  path:'portfolio',
  component: PortfolioComponent
},
{
  path:'services',
  component: ServicesComponent
},
{
  path:'projects',
  component: ProjectsComponent
},
{
  path:'contact',
  component: ContactComponent
},
{
  path:'projectDetail/:id',
  component: ProjectDetailComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
