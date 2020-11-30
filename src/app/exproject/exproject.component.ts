import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-exproject',
  templateUrl: './exproject.component.html',
  styleUrls: ['./exproject.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExprojectComponent implements OnInit {

  

  public projects = [
    {
      title: 'test project 1',
      imageURL: 'https://gortoncenter.org/wp-content/uploads/2018/03/LordOfTheRings.jpg',
      url: 'https://www.youtube.com/watch?v=2sML2bq_WGw',
      markup: '<app-contact></app-contact>',
      destination: 'gofiles',
      //color: '#4a1d9e'
    },
    {
      title: 'test project 2',
      imageURL: 'https://gortoncenter.org/wp-content/uploads/2018/03/LordOfTheRings.jpg',
      url: 'https://www.youtube.com/watch?v=2sML2bq_WGw',
      markup: '<app-contact></app-contact>', 
      destination: 'r2',
      //color: '#1d989e'
    },
    {
      title: 'test project 3',
      imageURL: 'https://gortoncenter.org/wp-content/uploads/2018/03/LordOfTheRings.jpg',
      url: 'https://www.youtube.com/watch?v=2sML2bq_WGw',
      markup: '<app-contact></app-contact>',
      destination: 'r2'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  openProject() {
    //window.open("www.youtube.com");
    console.log(this.projects[2].destination);
    
  };

}
