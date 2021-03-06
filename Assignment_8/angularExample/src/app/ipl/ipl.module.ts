import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { PlayerStatComponent } from './player-stat/player-stat.component';

import { IplComponent } from './ipl.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IplRoutingModule } from './ipl-routing.module';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { PlayerComponent } from './player/player.component';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    IplComponent,
    HomeComponent, 
    TeamComponent, 
    PlayerComponent, 
    PlayerStatComponent],
  imports: [
    CommonModule,
    IplRoutingModule,
    HttpClientModule,
    Ng2GoogleChartsModule
  ]
})
export class IplModule { }