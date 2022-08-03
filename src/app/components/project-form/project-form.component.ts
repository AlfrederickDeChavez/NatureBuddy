import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Projects } from 'src/app/models/Projects.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss'],
})
export class ProjectFormComponent implements OnInit {

  constructor(private modalCtrl: ModalController, private projectService: ProjectService) { }

  public project: Projects = {
    title: '',
    location: '',
    date: '',
    description: '',
  }
  
  ngOnInit() {}

  cancel() {
    this.modalCtrl.dismiss()
  }

  save() {
    this.projectService.addProject(this.project)
    this.project = {
      title: '',
      location: '',
      date: '',
      description: '',
    }
    setTimeout(() => {
      this.modalCtrl.dismiss()
    }, 500)
  }
}
 