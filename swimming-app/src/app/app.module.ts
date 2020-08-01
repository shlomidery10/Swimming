import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AgGridModule } from 'ag-grid-angular';
import { GridTrainingPlanComponent } from './grid-training-plan/grid-training-plan.component';
import { PlaningWorkoutComponent } from './planing-workout/planing-workout.component';
import { ReleaseComponent } from './ICell_Renderer_Components/release/release.component';
import { WarmUpComponent } from './ICell_Renderer_Components/warm-up/warm-up.component';
import { MajorExerciseComponent } from './ICell_Renderer_Components/major-exercise/major-exercise.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { WarmUpGridComponent } from './grid-training-plan/warm-up-grid/warm-up-grid.component';
import { MajorExerciseGridComponent } from './grid-training-plan/major-exercise-grid/major-exercise-grid.component';
import { ReleaseGridComponent } from './grid-training-plan/release-grid/release-grid.component';
import { TrainingSetReleaseComponent } from './training-set/training-set-release/training-set-release.component';
import { TrainingSetMajorExerciseComponent } from './training-set/training-set-major-exercise/training-set-major-exercise.component';
import { TrainingSetWarmUpComponent } from './training-set/training-set-warm-up/training-set-warm-up.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    GridTrainingPlanComponent,
    PlaningWorkoutComponent,
    ReleaseComponent,
    WarmUpComponent,
    MajorExerciseComponent,
    WarmUpGridComponent,
    MajorExerciseGridComponent,
    ReleaseGridComponent,
    TrainingSetReleaseComponent,
    TrainingSetMajorExerciseComponent,
    TrainingSetWarmUpComponent,


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
