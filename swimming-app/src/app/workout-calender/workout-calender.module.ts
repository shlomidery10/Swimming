import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateAdapter, CalendarModule } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/moment';
import * as moment from 'moment';
import { WorkoutCalenderComponent } from './workout-calender.component';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

export function momentAdapterFactory() {
  return adapterFactory(moment);
};
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    WorkoutCalenderComponent,
  ],
  imports: [
    CommonModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: momentAdapterFactory }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader), // exported factory function needed for AoT compilation
        deps: [HttpClient]
      }
    })
  ],
  exports:[
    WorkoutCalenderComponent
  ]
})
export class WorkoutCalenderModule { }
