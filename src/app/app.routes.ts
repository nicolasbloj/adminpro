import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Charts1Component } from './pages/charts1/charts1.component';
import { NopagefoundComponent } from './shared/404/nopagefound.component';
import { PagesComponent } from './pages/pages.component';


const appRoutes: Routes = [

    {
        path: '', component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'charts1', component: Charts1Component },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    },

    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.
    { path: '**', component: NopagefoundComponent },

];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });

/*
El useHash, hace que en nuestro router y navegación,
use el caracter # en el URL... si pones FALSE, entonces no lo usa.... pero si no lo usas,
a la hora de desplegar tu aplicación en un servidor, deberías de cambiar el
 archivo HTACCESS para indicar que todos los URLs pasan por el index.html
*/
