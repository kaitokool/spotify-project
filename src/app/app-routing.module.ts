import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicPlayComponent } from './modules/music-play/music-play.component';
import { MainComponent } from './shared/main/main.component';
import { MenuComponent } from './shared/menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/home/home.module').then(
            (m) => m.HomeModule
        ),
      },
      {
        path: 'music',
        loadChildren: () =>
          import('./modules/music-play/music-play.module').then(
            (m) => m.MusicPlayModule
        ),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
