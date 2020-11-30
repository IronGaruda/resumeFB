import { Component, OnInit, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api-call',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.scss'], 
  encapsulation: ViewEncapsulation.None
})
export class ApiCallComponent implements OnInit {
  //URL INFO
  ROOT_URL = 'https://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=d966d4a92af242dc867880725ae464ae&mapid=40070&max=1&outputType=JSON';
  isShown = false;
  @Output() valueChange = new EventEmitter();
  switcher = true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  //OBJECT
  stationInfo = {
    arrivalTime: null,
    currentTime: null,
    totalTime: null,
    currentHour: null, 
    arrivalHour: null,
    currentMinute: null,
    arrivalMinute: null
  };

  getCall(){
    //CALL CHECK
    console.log("we did it boys");
    //HANDLES RESULT VISIBILITY
    if (this.isShown == false) {
      this.isShown = true;
    };

    //HANDLES OUTPUT TO PARENT COMPONENT (TITLE VISIBILITY)
   this.switcher = false;
   this.valueChange.emit(this.switcher);

    //SUBSCRIBE TO DATA
    this.http.get(this.ROOT_URL).subscribe((stationObj: any) => {
    console.table(stationObj);

      //CONVERT 24HR => 12HR
      if(this.stationInfo.currentHour > 12) {this.stationInfo.currentHour - 12;};
      if(this.stationInfo.currentHour == 0) {this.stationInfo.currentHour = 12;};
    
    //ASSIGN OBJECT PARAMS TO VARIABLES
    this.stationInfo.arrivalTime = stationObj.ctatt.eta[0].arrT;
    this.stationInfo.currentTime = stationObj.ctatt.tmst;
    this.stationInfo.totalTime = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
    this.stationInfo.currentHour = parseInt(this.stationInfo.currentTime.substr(11,2), 10);
    this.stationInfo.arrivalHour = parseInt(this.stationInfo.arrivalTime.substr(11,2), 10);
    this.stationInfo.currentMinute = this.stationInfo.currentTime.substr(14,2);
    this.stationInfo.arrivalMinute = this.stationInfo.arrivalTime.substr(14,2);

    //LOGGING OUT TIME AND OBJECT
    console.log( "chicago time: " + this.stationInfo.currentHour + ":" + this.stationInfo.currentMinute );
    console.log("start station data: " + JSON.stringify(this.stationInfo));
  })

  return this.stationInfo;
  }
}
