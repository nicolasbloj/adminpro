import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/404/nopagefound.component';
import { Charts1Component } from './pages/charts1/charts1.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcumbsComponent } from './shared/breadcumbs/breadcumbs.component';

// Routes
import { APP_ROUTES } from './app.routes';
import { PagesComponent } from './pages/pages.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    Charts1Component,
    DashboardComponent,
    ProgressComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcumbsComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
