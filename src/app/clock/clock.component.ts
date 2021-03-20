import { TimeService } from './../time.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  template: `
    <div class="logo">Clock App</div>
    <div class="clock-card">
      <div class="time-display">
        <span class="display-number">{{this.currentTime}}</span>
      </div>
    </div>
  `,
  styleUrls: [
    './clock.component.scss'
  ]
})
export class ClockComponent implements OnInit {

  currentTime: string | undefined;

  constructor(private _timeService: TimeService) {
  this._timeService.time.subscribe((now: Date) =>
    this.currentTime = now.toLocaleTimeString('en-GB')
  )}

  ngOnInit(): void {
  }

}
