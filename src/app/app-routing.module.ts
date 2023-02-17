import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarraComponent } from './barra/barra.component';
import { BarraDobleComponent } from './pages/barra-doble/barra-doble.component';
import { DonaHttpComponent } from './pages/dona-http/dona-http.component';
import { DonaComponent } from './pages/dona/dona.component';

const routes: Routes = [
  {path:'graficas/barra',component:BarraComponent},
  {path:'graficas/barra-doble',component:BarraDobleComponent},
  {path:'graficas/dona',component:DonaComponent},
  {path:'graficas/dona-http',component:DonaHttpComponent},
  {path:'**',redirectTo:'graficas/barra'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
