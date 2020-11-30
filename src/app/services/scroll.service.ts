import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  scrollY = new BehaviorSubject(0);
  scrollY$ = this.scrollY.asObservable();

  constructor() {
  }

  updateScrollY(value: number): void {
    this.scrollY.next(value);
  }

  getScrollHeight(): number {
    return Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
  }
}
