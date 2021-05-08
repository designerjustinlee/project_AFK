import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isDone: boolean = false;
  isStart: boolean = false;

  done(event: boolean) {
    this.isDone = event;
  }

  start(event: boolean) {
    this.isStart = event;
  }
}
