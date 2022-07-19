import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss'],
})
export class ProjectFormComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  public project = {
    title: '',
  }
  
  ngOnInit() {}

  cancel() {
    this.modalCtrl.dismiss()
  }

  save() {
    console.log(this.project)
    this.modalCtrl.dismiss()
  }
}
