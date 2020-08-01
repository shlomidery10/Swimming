import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AgGridModule } from 'ag-grid-angular';
import { GridTrainingPlanComponent } from './grid-training-plan/grid-training-plan.component';
import { PlaningWorkoutComponent } from './planing-workout/planing-workout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { TrainingSetReleaseComponent } from './training-set/training-set-release/training-set-release.component';
import { TrainingSetMajorExerciseComponent } from './training-set/training-set-major-exercise/training-set-major-exercise.component';
import { TrainingSetWarmUpComponent } from './training-set/training-set-warm-up/training-set-warm-up.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { TrainingCellComponent } from './Icell_Renderer_Components/training-cell/training-cell.component';
import { RegisterWorkoutComponent } from './register-workout/register-workout.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    GridTrainingPlanComponent,
    PlaningWorkoutComponent,
    TrainingSetReleaseComponent,
    TrainingSetMajorExerciseComponent,
    TrainingSetWarmUpComponent,
    TrainingCellComponent,
    RegisterWorkoutComponent,


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
