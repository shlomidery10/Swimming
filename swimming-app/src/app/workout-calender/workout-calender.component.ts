import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { CalendarView, CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarEventTitleFormatter } from 'angular-calendar';
import { Subject, Observable } from 'rxjs';
import { CustomEventTitleFormatter } from './custom-event-title-formatter.provider';
import { TranslateService } from '@ngx-translate/core';
import { registerLocaleData } from '@angular/common';
import localeHe from '@angular/common/locales/he';
import { Workout } from '../shared/models/workout.model';
import { Store } from '@ngrx/store';
import { LoadWorkouts } from '../store/actions/workouts.actions';

registerLocaleData(localeHe);

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'workout-calender',
  templateUrl: './workout-calender.component.html',
  styleUrls: ['./workout-calender.component.css'],
  providers: [
    {
      provide: CalendarEventTitleFormatter,
      useClass: CustomEventTitleFormatter,
    },
  ],
})
export class WorkoutCalenderComponent implements OnInit {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
  workouts$: Observable<Workout[]> = this.store.select(state => state.workouts);

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<span class="material-icons">create</span>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<span class="material-icons">delete</span>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = 
  [
    // {
    //   start: subDays(startOfDay(new Date()), 1),
    //   end: addDays(new Date(), 1),
    //   title: 'A 3 day event',
    //   color: colors.red,
    //   actions: this.actions,
    //   allDay: true,
    //   resizable: {
    //     beforeStart: true,
    //     afterEnd: true,
    //   },
    //   draggable: true,
    // },
    // {
    //   start: startOfDay(new Date()),
    //   title: 'An event with no end date',
    //   color: colors.yellow,
    //   actions: this.actions,
    // },
    // {
    //   start: subDays(endOfMonth(new Date()), 3),
    //   end: addDays(endOfMonth(new Date()), 3),
    //   title: 'A long event that spans 2 months',
    //   color: colors.blue,
    //   allDay: true,
    // },
    {
      start: new Date(new Date().setHours(10)),
      end: new Date(new Date().setHours(12)),
      title: 'A draggable and resizable event1',
      color: colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: false,
        afterEnd: false,
      },
      draggable: false,
    },
    {
      start: new Date(new Date().setHours(10)),
      end: new Date(new Date().setHours(12)),
      title: 'A draggable and resizable event2',
      color: colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: false,
        afterEnd: false,
      },
      draggable: false,
    },
  ];

  activeDayIsOpen: boolean = true;

  constructor(public translate: TranslateService,private store: Store<{ workouts: Workout[] }>) {
    
  }

  ngOnInit() {
    this.store.dispatch({ type: LoadWorkouts });
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (this.isSameMonth(date, this.viewDate)) {
      if (
        (this.isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }
  isSameMonth(date1:Date, date2:Date){
      return date1.getMonth() == date2.getMonth() 
      && date1.getFullYear() == date2.getFullYear();
  }

  isSameDay(date1:Date, date2:Date){
    return date1.getDay() == date2.getDay() 
    && date1.getMonth() == date2.getMonth() 
    && date1.getFullYear() == date2.getFullYear();
  }
  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    // this.modal.open(this.modalContent, { size: 'lg' });
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}