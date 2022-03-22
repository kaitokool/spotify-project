import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicPlayRoutingModule } from './music-play-routing.module';
import { MusicPlayComponent } from './music-play.component';
import { ListMusicComponent } from './list-music/list-music.component';


@NgModule({
  declarations: [
    MusicPlayComponent,
    ListMusicComponent
  ],
  imports: [
    CommonModule,
    MusicPlayRoutingModule
  ]
})
export class MusicPlayModule { }
