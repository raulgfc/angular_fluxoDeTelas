import { ModuleWithProviders } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { PaginaInicialComponent } from './views/pagina-inicial/pagina-inicial.component';


const APP_ROUTES: Routes = [
    {path: 'pagina-inicial', component: PaginaInicialComponent},
    {path: '', component: HomeComponent}

];

