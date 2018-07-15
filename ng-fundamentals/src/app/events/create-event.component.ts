import {Component} from '@angular/core';
import { Router} from '@angular/router';

@Component({
  template: `
    <h1>New Event</h1>
    <hr>
    <div class="col-md-6">
      <h3>[Create Event Form Will Be Here]</h3>
      <br>
      <br>
      <button class="btn btn-primary" type="submit">Save</button>
      <button class="btn btn-default" (click)="cancel()" type="button">Cancel</button>
    </div>
  `
})
export class CreateEventComponent {
  isDirty: boolean = true;
  constructor(private router: Router){}
  cancel(){
    this.router.navigate(['/events'])
  }
}
