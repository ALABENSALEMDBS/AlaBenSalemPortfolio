import { Routes } from '@angular/router';
import { HomeComponent } from './linding/home/home.component';

export const routes: Routes = [
      {path:'', redirectTo:'home',pathMatch:'full'},//path initial par defaut
    {path:'home', component:HomeComponent} ,
    {path:'projects', loadComponent:() => import('./allprojects/projectspage/projectspage.component').then(m => m.ProjectspageComponent)},
  ];
