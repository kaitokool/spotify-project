import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { MenuFriendComponent } from './menu-friend/menu-friend.component';

@NgModule({
  declarations: [
    MainComponent,
    MenuComponent,
    MenuFriendComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MainComponent,
    MenuComponent
  ]
})
export class SharedModule { }
