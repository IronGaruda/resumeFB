import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-container',
  templateUrl: './project-container.component.html',
  styleUrls: ['./project-container.component.scss']
})
export class ProjectContainerComponent implements OnInit {
  public showProject = false;
  @Input() defaultTitle = 'Enter Title';
  @Input() activeTitle = null;
  @Input() projectType = 'default';
  @Input() projectColor = null;

  constructor() { }

  ngOnInit(): void {
    if (this.projectType === 'active') {
      this.showProject = true;
    }

    if (this.activeTitle === null) {
      this.activeTitle = this.defaultTitle;
    }

    if (this.projectColor === null) {
      this.projectColor = 'rgb(74, 29, 158)';
    }
  }

}
