import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicPlayComponent } from './music-play.component';

const routes: Routes = [
  {
    path: '',
    component: MusicPlayComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicPlayRoutingModule { }
