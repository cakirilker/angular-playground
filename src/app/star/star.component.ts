import { Component, OnInit, OnChanges, SimpleChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {
  starWidth: number;
  @Input() rating: number;
  @Output() ratingClick: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
  onClick(): void {
    this.ratingClick.emit(`The rating: ${this.rating} was clicked`);
  }
  ngOnInit() {
  }
  // OnChanges only watches for input element changes
  ngOnChanges(changes: SimpleChanges): void {
    this.starWidth = this.rating * 75 / 5;
  }
}
