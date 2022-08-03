import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Projects } from 'src/app/models/Projects.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {

  showDetails: boolean = false;
  @Input() communityProjects: Projects[];

  constructor() { } 

  ngOnInit() {
  }

  viewProjectDetails() {
    this.showDetails = true
  }

  closeProjectDetails() {
    this.showDetails = false
  }
  
}
