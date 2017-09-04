import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Time Zone Display
  current = new Date();
  timezone = null;
  lastSelected = null;
  updateTimeZone(timezone) {
    this.current = new Date();
    if (timezone === 'pst') {
      this.current.setHours(this.current.getHours() - 2);
    } else if (timezone === 'mst') {
      this.current.setHours(this.current.getHours() - 1);
    // } else if (timezone === 'cst') {
    //   // do nothing; this is default time zone
    } else if (timezone === 'est') {
      this.current.setHours(this.current.getHours() + 1);
    // } else if (timezone === 'clear') {
    //   // display current time in default time zone
    }
    this.lastSelected = timezone;
  }

  // Switches
  switches: string[] = ["on", "on", "off", "off", "on", "on", "off"];
  switchClick(i) {
    if(this.switches[i] === "on") {
      this.switches[i] = "off";
    } else {
      this.switches[i] = "on";
    }
  }

  // User Registration Form
  user = new User();
  users = [];
  onSubmit() {
    event.preventDefault();
    this.users.push(this.user);
    this.user = new User();
  }
}
