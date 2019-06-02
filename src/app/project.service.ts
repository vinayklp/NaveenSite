import { Injectable } from '@angular/core';
import { ProjectModule } from './project/project.module';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: ProjectModule[];

  constructor() { 
    this.projects = [{"Title":"Giri nagar","ImgSrc":"../../assets/house.jpg","Description":"Ready to occupy. The Paragraphs module allows content creators to choose which kinds of paragraphs they want to place on the page, and the order in which they want to place them. They can do all of this through the familiar node edit screen. There is no need to resort to code, the dreaded block placement config screen or Panelizer overrides. They just use node edit form where all content is available to them in one place."},
    {"Title":"Rajaji Nagar","ImgSrc":"../../assets/house2.jpg","Description":"Ready to occupy. The Paragraphs module allows content creators to choose which kinds of paragraphs they want to place on the page, and the order in which they want to place them. They can do all of this through the familiar node edit screen. There is no need to resort to code, the dreaded block placement config screen or Panelizer overrides. They just use node edit form where all content is available to them in one place."},
    {"Title":"Jindal city","ImgSrc":"../../assets/house3.jpg","Description":"Under construction. The Paragraphs module allows content creators to choose which kinds of paragraphs they want to place on the page, and the order in which they want to place them. They can do all of this through the familiar node edit screen. There is no need to resort to code, the dreaded block placement config screen or Panelizer overrides. They just use node edit form where all content is available to them in one place."},
    {"Title":"Koramangala","ImgSrc":"../../assets/house.jpg","Description":"Ready to occupy. The Paragraphs module allows content creators to choose which kinds of paragraphs they want to place on the page, and the order in which they want to place them. They can do all of this through the familiar node edit screen. There is no need to resort to code, the dreaded block placement config screen or Panelizer overrides. They just use node edit form where all content is available to them in one place."},
    {"Title":"JP Nagar","ImgSrc":"../../assets/house2.jpg","Description":"Under construction. The Paragraphs module allows content creators to choose which kinds of paragraphs they want to place on the page, and the order in which they want to place them. They can do all of this through the familiar node edit screen. There is no need to resort to code, the dreaded block placement config screen or Panelizer overrides. They just use node edit form where all content is available to them in one place."}
  ];
  }

  getProjects() {    
    return this.projects;
  }
 
  getProject(id: string) {
    return this.projects.find(project => project.Title === id);
  }
}
