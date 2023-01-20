import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackerRoutingModule } from './tracker-routing.module';
import { TrackerComponent } from './tracker.component';
import { TrackerContainerComponent } from './tracker-container/tracker-container.component';
import { TrackerPresentationComponent } from './tracker-container/tracker-presentation/tracker-presentation.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TrackerComponent,
    TrackerContainerComponent,
    TrackerPresentationComponent
  ],
  imports: [
    CommonModule,
    TrackerRoutingModule,
    ReactiveFormsModule
  ]
})
export class TrackerModule { }
