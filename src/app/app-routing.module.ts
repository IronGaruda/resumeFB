import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectGofilesComponent } from './components/project-gofiles/project-gofiles.component';
import { ProjectR2Component } from './components/project-r2/project-r2.component';



const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path: 'home/:linkID', component: HomeComponent},
  {path: 'r2', component: ProjectR2Component},
  {path: 'gofiles', component: ProjectGofilesComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { enableTracing: true }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
