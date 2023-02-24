import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateComponent } from './interface/parcel';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
     {path:'', component:NavbarComponent},
     { path: '/', loadComponent: () => import('./display-parcel/display-parcel.component').then(d => d.DisplayParcelComponent) },
     { path: 'addparcel', loadComponent: () => import('./add-parcel/add-parcel.component').then(d => d.AddParcelComponent) }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  