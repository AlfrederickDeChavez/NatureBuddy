import { Injectable } from '@angular/core';
import { Projects } from '../models/Projects.model';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects: Projects[] = []
  
  constructor() { }

  getProjects() {
    return this.projects
  }

  addProject(project) {
    this.projects.push(project)
  }
}
