import { Component } from '@angular/core';
import { HomeService } from './app.home.service';

@Component({
	selector: 'app-home',
	providers: [HomeService],
	templateUrl: './templates/app.home.component.html',

})

export class HomeComponent { 
	constructor(
		private homeService: HomeService
	){
		this.getInitResponse();
	}

	getInitResponse() {
	this.homeService.returnMainService()
		.subscribe(val => console.log(val));
	}
}