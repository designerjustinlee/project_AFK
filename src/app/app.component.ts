import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isDone = false;

  rollWrist() {
    this.isDone = !this.isDone;
  }

  done() {
    this.isDone = true;
  }
}
