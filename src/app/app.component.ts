import { Component, OnInit } from '@angular/core';
import { TimerService } from './timer.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ TimerService ]
})



export class AppComponent implements OnInit {
  users = [
    new User('Alex', 'Dojban'),
    new User('Demy', 'Moore')
  ];
  constructor () {}

  ngOnInit() {

  }

  cons(text) {
    console.log(text);
  }

}
