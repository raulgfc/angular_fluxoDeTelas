import { Component, ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './views/home/home.component';
import { PagetwoComponent } from './views/pagetwo/pagetwo.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'pagetwo', component: PagetwoComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
