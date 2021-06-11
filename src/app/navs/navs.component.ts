import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html',
  styleUrls: ['./navs.component.css']
})
export class NavsComponent implements OnInit {

	lat = 20.5937;
	lng = 78.9629;
	mapType = 'satellite';


  responseData: any = [];
  TrucksData
  totalTrucks: any;
  TotalTruckNumbers: any = [];
  runningTrucks: any = [];
  stoppedTrucks: any = [];
  idleTrucks: any = [];
  errorTrucks: any = [];
  Data: any = [];
  searchTerm: string = '';
  selectedTrucks: any = [];
  step: any = '1';
  constructor(private api: AppService) { }


  ngOnInit() {

    this.api.getData().subscribe(res => {
      this.responseData = res;
      this.getTrucksNumber();
      this.getRunningTrucks();
      this.getStoppedTrucks();
      this.getIdleTrucks();
      this.getErrorTrucks();
      this.Data = this.TrucksData;
     
    })


  }

  selectChangeHandler(event: any) {
    this.selectedTrucks.push(event.target.value);
    console.log(this.selectedTrucks);
    this.Data = this.selectedTrucks;
    console.log(this.Data)



  }


  getTrucksNumber() {
    this.TrucksData = this.responseData.data;
    this.totalTrucks = this.TrucksData;
    console.log(this.TrucksData[0])
  }


  getRunningTrucks() {
    for (let i = 0; i < this.TrucksData.length; i++) {
      if (this.TrucksData[i].lastRunningState.truckRunningState == 1 && this.TrucksData[i].lastWaypoint.speed != 0) {
        this.runningTrucks.push(this.TrucksData[i])
      }
    }

  }


  getStoppedTrucks() {
    for (let i = 0; i < this.TrucksData.length; i++) {
      if (this.TrucksData[i].lastRunningState.truckRunningState == 0 && this.TrucksData[i].lastWaypoint.ignitionOn == false) {
        this.stoppedTrucks.push(this.TrucksData[i])
      }
    }
  }

  getIdleTrucks() {
    for (let i = 0; i < this.TrucksData.length; i++) {
      if (this.TrucksData[i].lastRunningState.truckRunningState == 0 && this.TrucksData[i].lastWaypoint.ignitionOn == true) {
        this.idleTrucks.push(this.TrucksData[i])
      }
    }

  }

  getErrorTrucks() {
    var currentTimeInSeconds = Math.floor(Date.now() / 1000);
    var currentTimeInMilliseconds = Date.now();
    for (let i = 0; i < this.TrucksData.length; i++) {
      if (currentTimeInSeconds - this.TrucksData[i].lastWaypoint.createTime > 14400) {
        this.errorTrucks.push(this.TrucksData[i])

      }
    }

  }

  TotalTrucks() {
    this.step = '1'
    this.Data = this.TrucksData


  }

  RunningTrucks() {
    this.step = '2'
    this.Data = this.runningTrucks

  }
  StoppedTrucks() {
    this.step = '3'
    this.Data = this.stoppedTrucks


  }
  IdleTrucks() {
    this.step = '4'
    this.Data = this.idleTrucks


  }
  ErrorTrucks() {
    this.step = '5'
    this.Data = this.errorTrucks;

  }

  // getMarK() {
  //   if (this.step = '1') {
  //     for (let i = 0; i < this.TrucksData.length; i++) {
  //       this.Mark.push(this.TrucksData[i])
  //     }
  //     console.log( this.Mark)
  //   }

  // }


}
