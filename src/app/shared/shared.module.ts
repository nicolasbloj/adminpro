import { NgModule } from '@angular/core';

import { NopagefoundComponent } from './404/nopagefound.component';
import { BreadcumbsComponent } from './breadcumbs/breadcumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
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
    ]
})
export class SharedModule {}

