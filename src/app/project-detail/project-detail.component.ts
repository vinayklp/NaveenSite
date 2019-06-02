import { Component, OnInit } from '@angular/core';
import { ProjectModule } from '../project/project.module';
import { ProjectService } from '../project.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  projectId : string;
  _project = new ProjectModule();  
  
  constructor(private route: ActivatedRoute,
    private projectService  :ProjectService,
    private location: Location) { 
    
  }

  ngOnInit() {
    this.getProjectDetail();
  }

  getProjectDetail() {
    let id = this.route.snapshot.params['id'];    
    this._project = this.projectService.getProject(id);
  }

}
