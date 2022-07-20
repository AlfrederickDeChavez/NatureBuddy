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
    location: '',
    date: '',
    description: '',
  }
  
  ngOnInit() {}

  cancel() {
    this.modalCtrl.dismiss()
  }

  save() {
    console.log(this.project)
    setTimeout(() => {
      this.modalCtrl.dismiss()
    }, 500)
  }
}
