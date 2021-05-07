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

  isRunning: boolean = false;

  private subscription = new Subscription();

  isDone: boolean = false;

  constructor() {}

  milliSecondsInASecond = 1000;
  minutesInAnHour = 60;
  secondsInAMinute = 60;

  timeDifference: number = 0;

  minutesToDday: number = 3;
  secondsToDday: number = 0;

  private getTimeDifference(dDay: number) {
    this.timeDifference = dDay - new Date().getTime();

    if (this.timeDifference > 0) {
      this.allocateTimeUnits(this.timeDifference);
    } else {
      this.isDone = true;
      this.subscription.unsubscribe();
      this.doneEvent.emit(true);
      this.minutesToDday = 0;
      this.secondsToDday = 0;
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
    this.isRunning = true;

    const dDay: Date = new Date();
    dDay.setSeconds(dDay.getSeconds() + 180); //3분

    this.subscription = interval(500).subscribe((x) => {
      this.getTimeDifference(dDay.getTime());
    });
  }

  init() {
    this.isRunning = false;
    this.isDone = false;
    this.doneEvent.emit(false);
    this.minutesToDday = 3;
    this.secondsToDday = 0;
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
