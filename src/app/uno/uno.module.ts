import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnoRoutingModule } from './uno-routing.module';
import { PlayerComponent } from './components/player/player.component';
import { PlayersComponent } from './components/players/players.component';
import { TableComponent } from './components/table/table.component';


@NgModule({
  declarations: [PlayerComponent, PlayersComponent, TableComponent],
  imports: [
    CommonModule,
    UnoRoutingModule
  ]
})
export class UnoModule { }
