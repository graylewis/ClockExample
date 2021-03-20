import { Injectable } from '@angular/core';

import { Observable } from "rxjs";
import { timer } from 'rxjs';
import { switchMap, map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  private clock: Observable<Date> = timer(0,1000).pipe(
    map(tick => new Date()),
    shareReplay(1)
  );;

  get time() {
    return this.clock;
  }

  constructor() { 
  } 
}
