import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AgGridModule } from 'ag-grid-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AutowidthDirective } from './autowidth.directive';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { MatFormAutowidthFieldComponent } from './shared/mat-form-autowidth-field/mat-form-autowidth-field.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserFormComponent } from './user-management/user-form/user-form.component';
import { CoachDetailsComponent } from './user-management/coach-details/coach-details.component';
import { TeamDetailsComponent } from './user-management/coach-details/team-details/team-details.component';
import { TraineeGridComponent } from './user-management/coach-details/team-details/trainee-grid/trainee-grid.component';
import { NoRowsOverlayComponent as GridTrainingPlanNoRowsOverlayComponent } from './user-management/coach-details/team-details/trainee-grid/no-rows-overlay/no-rows-overlay.component';
import { SharedModule } from './shared/shared.module';
import { WorkoutManagementModule } from './workout-management/workout-management.module';
import { WorkoutCalenderModule } from './workout-calender/workout-calender.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    GridTrainingPlanNoRowsOverlayComponent,
    UserManagementComponent,
    UserFormComponent,
    CoachDetailsComponent,
    TeamDetailsComponent,
    TraineeGridComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    WorkoutManagementModule,
    WorkoutCalenderModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader), // exported factory function needed for AoT compilation
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }