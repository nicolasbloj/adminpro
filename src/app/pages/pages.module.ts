import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { PagesComponent } from './pages.component';

import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Charts1Component } from './charts1/charts1.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PAGES_ROUTES } from './pages.routes';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    PAGES_ROUTES,
    ChartsModule
  ],
  declarations: [
    Charts1Component,
    DashboardComponent,
    ProgressComponent,
    PagesComponent,
    IncrementadorComponent,
    DoughnutChartComponent,
    AccountSettingsComponent
  ],
  exports: [
    Charts1Component,
    DashboardComponent,
    ProgressComponent,
    PagesComponent]
})
export class PagesModule { }
