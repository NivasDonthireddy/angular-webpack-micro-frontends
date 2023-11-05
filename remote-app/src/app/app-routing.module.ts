import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FlightsModule} from "./flights/flights.module";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'flights-search',
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FlightsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
