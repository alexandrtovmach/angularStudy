import { Injectable } from '@angular/core';

@Injectable()
export class TimerService {
  ticker = 0;
  constructor() {}

  fuu = () => {
    return this.ticker += 1;
  }

}
