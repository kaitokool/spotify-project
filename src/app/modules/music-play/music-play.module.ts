import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicPlayRoutingModule } from './music-play-routing.module';
import { MusicPlayComponent } from './music-play.component';


@NgModule({
  declarations: [
    MusicPlayComponent
  ],
  imports: [
    CommonModule,
    MusicPlayRoutingModule
  ]
})
export class MusicPlayModule { }
