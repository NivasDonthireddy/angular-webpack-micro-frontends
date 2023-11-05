import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsSearchComponent } from './flights-search/flights-search.component';
import {RouterModule} from "@angular/router";
import {FLIGHTS_ROUTES} from "./flights-routes";



@NgModule({
  declarations: [
    FlightsSearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(FLIGHTS_ROUTES)
  ]
})
export class FlightsModule { }
