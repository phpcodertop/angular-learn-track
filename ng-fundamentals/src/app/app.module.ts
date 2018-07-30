import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  EventsListComponent,
  EventsThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivatorService,
  EventListResolver
} from './events/index'
import {EventsAppComponent} from './events-app.component';
import {NavBarComponent} from './nav/navbar.component';
import {EventService} from './events/shared/event.service';
import {ToastrService} from './common/toastr.service';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {Error404Component} from './errors/404.component';
import {AuthService} from './user/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivatorService,
    { provide: 'canDeactivateCreateEvent' , useValue: checkDirtyState},
    EventListResolver,
    AuthService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, Do you want to cancel ?');
  return true;
}
