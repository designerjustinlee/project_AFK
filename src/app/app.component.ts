import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  show = false;

  rollWrist() {
    this.show = !this.show;
  }

  done() {
    this.show = !this.show;
  }
}
