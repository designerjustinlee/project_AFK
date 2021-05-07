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

  milliSecondsInASecond = 1000;
  minutesInAnHour = 60;
  secondsInAMinute = 60;

  timeDifference: number = 0;
  secondsToDday: number = 0;
  minutesToDday: number = 0;

  private getTimeDifference(dDay: Date) {
    this.timeDifference = dDay.getTime() - new Date().getTime();

    this.allocateTimeUnits(this.timeDifference);

    if (this.timeDifference < 0) {
      this.isStart = false;

      this.subscription.unsubscribe();

      this.doneEvent.emit();
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

    let dDay: Date = new Date();
    dDay.setSeconds(new Date().getDate() + 20);

    this.subscription = interval(500).subscribe((x) => {
      this.getTimeDifference(dDay);
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
