import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { TileComponent } from './tile/tile.component';
import { DialogContentExampleComponent } from './dialog-content-example/dialog-content-example.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tile', component: TileComponent },
  { path: 'dialog', component: DialogContentExampleComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
