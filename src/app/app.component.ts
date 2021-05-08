import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isDone: boolean = false;
  isRunning: boolean = false;

  done(event: boolean) {
    this.isDone = event;
    this.isRunning = false;
  }

  start(event: boolean) {
    this.isRunning = event;
  }
}
