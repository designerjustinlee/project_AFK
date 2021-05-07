import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roll-wrist',
  templateUrl: './roll-wrist.component.html',
  styleUrls: ['./roll-wrist.component.scss'],
})
export class RollWristComponent implements OnInit {
  show = false;

  constructor() {}

  ngOnInit() {}

  rollWrist() {
    this.show = !this.show;
  }
}
