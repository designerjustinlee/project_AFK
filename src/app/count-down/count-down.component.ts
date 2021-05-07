import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss'],
})
export class CountDownComponent implements OnInit, OnDestroy {
  @Output() doneEvent = new EventEmitter<boolean>();

  isStart: boolean = false;

  private subscription = new Subscription();

  constructor() {}

  dateNow = new Date();
  dDay = new Date();

  milliSecondsInASecond = 1000;
  minutesInAnHour = 60;
  secondsInAMinute = 60;

  timeDifference: number = 0;
  secondsToDday: number = 0;
  minutesToDday: number = 0;

  private getTimeDifference() {
    this.timeDifference = this.dDay.getTime() - new Date().getTime();
    console.log('getTimeDiff', this.timeDifference);
    this.allocateTimeUnits(this.timeDifference);
    if (this.timeDifference < 0) {
      this.isStart = false;

      this.subscription.unsubscribe();

      this.doneEvent.emit(true);
    }
  }

  private allocateTimeUnits(timeDifference: number) {
    this.secondsToDday = Math.floor(
      (timeDifference / this.milliSecondsInASecond) % this.secondsInAMinute
    );
    this.minutesToDday = Math.floor(
      (timeDifference / (this.milliSecondsInASecond * this.minutesInAnHour)) %
        this.secondsInAMinute
    );
  }

  start() {
    this.isStart = true;
    this.dDay.setSeconds(this.dDay.getSeconds() + 20);
    this.subscription = interval(1000).subscribe((x) => {
      this.getTimeDifference();
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
