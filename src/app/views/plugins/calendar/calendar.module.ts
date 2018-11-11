import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Calendar
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { CalendarComponent } from './calendar.component';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

// Routing
import { CalendarRoutingModule } from './calendar-routing.module';

@NgModule({
  imports: [
    CalendarRoutingModule,
    CommonModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  declarations: [
    CalendarComponent
  ]
})
export class CalendarInitModule { }
