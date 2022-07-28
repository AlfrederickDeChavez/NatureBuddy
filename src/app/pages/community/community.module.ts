import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommunityPageRoutingModule } from './community-routing.module';

import { CommunityPage } from './community.page';
import { ProjectsComponent } from 'src/app/components/projects/projects.component';
import { PeopleComponent } from 'src/app/components/people/people.component';
import { PendingComponent } from 'src/app/components/pending/pending.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommunityPageRoutingModule,
  ],
  declarations: [CommunityPage, ProjectsComponent, PeopleComponent, PendingComponent]
})
export class CommunityPageModule {}
