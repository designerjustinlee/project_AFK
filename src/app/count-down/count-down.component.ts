import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss'],
})
export class CountDownComponent implements OnInit, OnDestroy {
  isStart: boolean = false;
  private subscription = new Subscription();

  constructor() {
    this.dDay.setMinutes(this.dDay.getMinutes() + 30);
  }

  dateNow = new Date();
  dDay = new Date();

  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  secondsInAMinute = 60;

  timeDifference: number = 0;
  secondsToDday: number = 0;
  minutesToDday: number = 0;
  // hoursToDday: number = 0;
  // daysToDday: number = 0;

  private getTimeDifference() {
    this.timeDifference = this.dDay.getTime() - new Date().getTime();
    this.allocateTimeUnits(this.timeDifference);
  }

  private allocateTimeUnits(timeDifference: number) {
    this.secondsToDday = Math.floor(
      (timeDifference / this.milliSecondsInASecond) % this.secondsInAMinute
    );
    this.minutesToDday = Math.floor(
      (timeDifference / (this.milliSecondsInASecond * this.minutesInAnHour)) %
        this.secondsInAMinute
    );
    // this.hoursToDday = Math.floor(
    //   (timeDifference /
    //     (this.milliSecondsInASecond *
    //       this.minutesInAnHour *
    //       this.secondsInAMinute)) %
    //     this.hoursInADay
    // );
    // this.daysToDday = Math.floor(
    //   timeDifference /
    //     (this.milliSecondsInASecond *
    //       this.minutesInAnHour *
    //       this.secondsInAMinute *
    //       this.hoursInADay)
    // );
  }

  start() {
    console.log('start');
  }

  ngOnInit(): void {
    this.subscription = interval(1000).subscribe((x) => {
      this.getTimeDifference();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
