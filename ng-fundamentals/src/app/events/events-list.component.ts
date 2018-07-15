import {Component} from '@angular/core';
import {EventService} from './shared/event.service';
import {ToastrService} from '../common/toastr.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr>
      <div class="row">
        <div class="col-md-6" *ngFor="let event of events">
          <event-thumbnail (click)="handleThumbnailClick(event.name)"  [event]="event" ></event-thumbnail>
        </div>
      </div>
    </div>
  `
})
export class EventsListComponent{
  events:any;
  constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute){

  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }


}
