import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivatorService,
  EventListResolver
} from './events/index'

import {Routes} from '@angular/router';
import {Error404Component} from './errors/404.component';
import {UserModule} from './user/user.module';

export const appRoutes: Routes = [
  { path: 'events' , component: EventsListComponent, resolve: {events: EventListResolver}},
  { path: 'events/new' , component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  { path: 'events/:id' , component: EventDetailsComponent, canActivate: [EventRouteActivatorService]},
  { path: '404' , component: Error404Component},
  { path: 'user', loadChildren: () => UserModule},
  { path: '**', redirectTo: '/events' , pathMatch: 'full'}

];
