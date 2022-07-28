import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/models/Projects.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {

  myprojects: Projects[] = []
  communityProjects: Projects[] = []
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.myprojects = this.projectService.getProjects()
  }

}
