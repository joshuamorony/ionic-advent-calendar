import { Component } from '@angular/core';
import { AdventDaysProvider } from '../../providers/advent-days/advent-days';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	constructor(private adventDaysProvider: AdventDaysProvider) {

	}

	ionViewDidLoad(){
		this.adventDaysProvider.loadDays();
	}

	flip(day){
		this.adventDaysProvider.flipDay(day);
	}

}
