import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/models/Projects.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.page.html',
  styleUrls: ['./community.page.scss'],
})
export class CommunityPage implements OnInit {

  showProject: boolean = true;
  showPeople: boolean = false;
  showPending: boolean = false;

  communityProjects: Projects[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.communityProjects = this.projectService.getProjects()
  }

  
  
 
  toggleProjects() {
    this.showPending = false
    this.showPeople = false
    this.showProject = true

  }

  togglePeople() {
    this.showPending = false
    this.showPeople = true
    this.showProject = false

  }

  togglePending() {
    this.showPending = true
    this.showPeople = false
    this.showProject = false
  }

}
