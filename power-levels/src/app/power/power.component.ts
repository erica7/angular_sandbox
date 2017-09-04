import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  initialPower = 0;

  onSubmit() {
    console.log("onSubmit() invoked")
  }
}
