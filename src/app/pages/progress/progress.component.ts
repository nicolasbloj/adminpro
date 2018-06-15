import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progressValue1 = 10;

  progressValue2 = 10;

  constructor() { }

  ngOnInit() {
  }

  receiveProgressValue1(event) {
    console.log(event);
    this.progressValue1 = event;
  }
s
  receiveProgressValue2(event) {
    console.log(event);
    this.progressValue2  = event;
  }

}
