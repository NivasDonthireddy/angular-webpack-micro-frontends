import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FlightsModule} from "./flights/flights.module";
import { LandingComponent } from './landing.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'flights-search',
    pathMatch: "full"
  },
  {
    path: 'landing',
    component: LandingComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FlightsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
