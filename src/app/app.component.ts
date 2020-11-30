import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { ScrollService } from './services/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'ng-resume';
  showNav = false;
  scroll$ = fromEvent(window, 'scroll').pipe(map((x) => this.getYPosition(x) > 200 ? this.showNav = true : this.showNav = false));

  constructor(private scrollService: ScrollService) {
  }

  getYPosition(e): number {
    return e.target.scrollingElement.scrollTop;
  }
}
