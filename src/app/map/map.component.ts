import { Component, Input, OnInit, ViewChild } from '@angular/core';
/// <reference types="@types/googlemaps" />


@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
	@Input() mark = [];


	lat = 20.5937;
	lng = 78.9629;
	mapType = 'satellite';
	selectedMarker = null;
	
	constructor() { }

	ngOnInit(): void {
	
	}

	ngAfterContentOnInit(){
		console.log(this.mark)
		console.log(this.mark[0].lastWaypoint.lng)
	}


	




}





