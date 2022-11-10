import { AfiliacionComponent } from './pages/afiliacion/afiliacion.component';
import { GridComponent } from './pages/grid/grid.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '', component: AfiliacionComponent
  },
  {
    path: 'em', component: HomeComponent
  },
  {
    path: 'grid', component: GridComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
