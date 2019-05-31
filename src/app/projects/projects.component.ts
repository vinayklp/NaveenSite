import { Component, OnInit } from '@angular/core';
import { ProjectModule } from '../project/project.module';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: ProjectModule[] 
  constructor() { }

  ngOnInit() {
    this.projects = [{"Description":"hfdhjdhdgsjsajdagdnbhjjhjh","Title":"fjdhj","ImgSrc":"dfhjdh"},
    {"Description":"hfdhjdh","Title":"fjdhj","ImgSrc":"dfhjdh"},
    {"Description":"hfdhjdh","Title":"fjdhj","ImgSrc":"dfhjdh"},
    {"Description":"hfdhjdh","Title":"fjdhj","ImgSrc":"dfhjdh"},
    {"Description":"hfdhjdh","Title":"fjdhj","ImgSrc":"dfhjdh"}
  ];
  }

}
