import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: 'flights',
    loadChildren: () => import("remote-app/FlightsModule").then(m => m.FlightsModule)
  },
  {
    path: 'landing',
    loadComponent: () => import('remote-app/LandingComponent').then(m => m.LandingComponent),
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
