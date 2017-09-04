import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _apiService: ApiService){}

  username = "";  // two-way binding to form

  user = {};  // object to be populated by API call results

  onSubmit() {
    // API call using service
    this._apiService.apiCall(this.username)
      .then(user => {
        this.user = user;

      })
      .catch(err => {
        // console.log(err);
        if(err.status === 404) {
          this.user = {error: "User does not exist. Pick a different username."};
        } else {
          this.user = {error: "Error - other"};
        }
      });

    this.username = "";

  }


}
