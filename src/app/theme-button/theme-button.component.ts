import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-theme-button',
  templateUrl: './theme-button.component.html',
  styleUrls: ['./theme-button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ThemeButtonComponent implements OnInit {
  isChecked = true;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  toggle() {
    this.isChecked = !this.isChecked;
    console.log(this.isChecked);

    if(!this.isChecked){
      this.document.body.classList.add('dark-mode');
    } else {
      this.document.body.classList.remove('dark-mode');
    }
  }

}
