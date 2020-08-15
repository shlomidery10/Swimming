import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { AgGridModule } from 'ag-grid-angular';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import { CommonModule } from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { GridTrainingPlanComponent } from './grid-training-plan/grid-training-plan.component';
import { PlaningWorkoutComponent } from './planing-workout/planing-workout.component';
import { TrainingSetReleaseComponent } from './training-set/training-set-release/training-set-release.component';
import { TrainingSetMajorExerciseComponent } from './training-set/training-set-major-exercise/training-set-major-exercise.component';
import { TrainingSetWarmUpComponent } from './training-set/training-set-warm-up/training-set-warm-up.component';
import { TrainingCellComponent } from './grid-training-plan/Icell_Renderer_Components/training-cell/training-cell.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { RegisterWorkoutComponent } from './register-workout/register-workout.component';
import { ExerciseSetComponent } from './exercise/exercise-set/exercise-set.component';
import { WorkoutPartPlanComponent } from './workout-part-plan/workout-part-plan.component';
import { NoRowsOverlayComponent } from './grid-training-plan/no-rows-overlay/no-rows-overlay.component';
import { SharedModule } from '../shared/shared.module';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    GridTrainingPlanComponent,
    PlaningWorkoutComponent,
    TrainingSetReleaseComponent,
    TrainingSetMajorExerciseComponent,
    TrainingSetWarmUpComponent,
    TrainingCellComponent,
    RegisterWorkoutComponent,
    ExerciseComponent,
    ExerciseSetComponent,
    WorkoutPartPlanComponent,
    NoRowsOverlayComponent,

  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CommonModule,    
    HttpClientModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader), // exported factory function needed for AoT compilation
        deps: [HttpClient]
      }
    })
  ],
  exports:[
    PlaningWorkoutComponent,
  ]
})
export class WorkoutManagementModule { }
