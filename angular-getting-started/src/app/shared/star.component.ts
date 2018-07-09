import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'pm-star',
  styleUrls: ['./star.component.css'],
  templateUrl: './star.component.html'
})
export class StarComponent implements OnChanges {

  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  ngOnChanges(): void {
    this.starWidth = this.rating * 86 / 5;
  }
  onClick(): void {
    this.ratingClicked.emit('Rating is clicked 111');
  }
}
