import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-action-form',
  templateUrl: './action-form.component.html',
  styleUrls: ['./action-form.component.scss'],
})
export class ActionFormComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {} 

  cancel() {
    this.modalCtrl.dismiss()
  }

}
