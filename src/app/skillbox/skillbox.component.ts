import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-skillbox',
  templateUrl: './skillbox.component.html',
  styleUrls: ['./skillbox.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SkillboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayTitle(display: boolean) {
    display = false;
  }

}
