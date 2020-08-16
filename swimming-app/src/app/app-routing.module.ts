import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WorkoutCalenderComponent } from './workout-calender/workout-calender.component';
import { PlaningWorkoutComponent } from './workout-management/planing-workout/planing-workout.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/home'},
  { path: 'home', component: HomepageComponent, children:[
    { path: '', pathMatch:'full', redirectTo: '/home/calender'},
    { path: 'calender', component: WorkoutCalenderComponent },  
    { path: 'addworkout', component: PlaningWorkoutComponent },  

  ]
  },
  { path: '**', component: PageNotFoundComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
