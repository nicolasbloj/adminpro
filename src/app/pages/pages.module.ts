import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';

import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Charts1Component } from './charts1/charts1.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  declarations: [
    Charts1Component,
    DashboardComponent,
    ProgressComponent,
    PagesComponent
  ],
  exports: [
    Charts1Component,
    DashboardComponent,
    ProgressComponent,
    PagesComponent
  ]
})
export class PagesModule { }
