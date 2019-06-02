import { Component, OnInit } from '@angular/core';
import { ProjectModule } from '../project/project.module';
import { ProjectDetailComponent } from '../project-detail/project-detail.component';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: ProjectModule[] 
  constructor(private projectService : ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }
}
