import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarroselComponent } from './carrosel/carrosel.component';
import { YtvideoComponent } from './ytvideo/ytvideo.component';

const routes: Routes = [
  {path: 'carrosel', component: CarroselComponent},
  {path: 'video', component: YtvideoComponent},
  {path: '', redirectTo: 'carrosel', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
