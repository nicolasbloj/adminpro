import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NopagefoundComponent } from './404/nopagefound.component';
import { BreadcumbsComponent } from './breadcumbs/breadcumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarService } from '../services/service.index';



@NgModule({
    imports :[
        RouterModule,
        CommonModule
    ],
    declarations: [
        NopagefoundComponent,
        BreadcumbsComponent,
        HeaderComponent,
        SidebarComponent
    ],
    exports: [
        NopagefoundComponent,
        BreadcumbsComponent,
        HeaderComponent,
        SidebarComponent
    ],
    providers:[SidebarService]
})
export class SharedModule {}

