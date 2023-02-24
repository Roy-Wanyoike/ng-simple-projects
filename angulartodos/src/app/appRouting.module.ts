import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateComponent } from './interfaces/todos';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
     // {path:'', component:NavbarComponent},
     { path: '', loadComponent: () => import('./display-task/display-task.component').then(d => d.DisplayTaskComponent) },
     { path: 'addtask', loadComponent: () => import('./add-task/add-task.component').then(d => d.AddTaskComponent) }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  