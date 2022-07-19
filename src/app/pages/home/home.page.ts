import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { ActionFormComponent } from 'src/app/components/action-form/action-form.component';
import { ProjectFormComponent } from 'src/app/components/project-form/project-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private popOverCtrl: ModalController) { }

  ngOnInit() {
  }

  shareActions() {
    this.popOverCtrl.create({
      component: ActionFormComponent, 
      showBackdrop: false
    }).then((e) => {
      e.present();
    })
  }

  startProject() {
    this.popOverCtrl.create({
      component: ProjectFormComponent, 
      showBackdrop: false
    }).then((e) => {
      e.present();
    })
  }

}
