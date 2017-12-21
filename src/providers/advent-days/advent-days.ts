import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

interface AdventDay {
	front: string,
	unlockAt: string,
	flipped: boolean,
	content: string
}

@Injectable()
export class AdventDaysProvider {

	public adventDays: AdventDay[];
	
	constructor(private storage: Storage) {

	}

	loadDays(){

		this.storage.get('adventDays').then((days) => {

			if(days !== null){
			
				this.adventDays = days;

			} else {

				this.adventDays = [
					{front: '14', unlockAt: 'December 14, 2017 00:00:00', flipped: false, content: 'A partridge in a pear tree'},
					{front: '15', unlockAt: 'December 15, 2017 00:00:00', flipped: false, content: 'Two turtle doves'},
					{front: '16', unlockAt: 'December 16, 2017 00:00:00', flipped: false, content: 'Three French hens'},
					{front: '17', unlockAt: 'December 17, 2017 00:00:00', flipped: false, content: 'Four calling birds'},
					{front: '18', unlockAt: 'December 18, 2017 00:00:00', flipped: false, content: 'Five golden rings!'},
					{front: '19', unlockAt: 'December 19, 2017 00:00:00', flipped: false, content: 'Six geese a laying'},
					{front: '20', unlockAt: 'December 20, 2017 00:00:00', flipped: false, content: 'Seven swans a swimming'},
					{front: '21', unlockAt: 'December 21, 2017 00:00:00', flipped: false, content: 'Eight maids a milking'},
					{front: '22', unlockAt: 'December 22, 2017 00:00:00', flipped: false, content: 'Nine ladies dancing'},
					{front: '23', unlockAt: 'December 23, 2017 00:00:00', flipped: false, content: 'Ten lords a leaping'},
					{front: '24', unlockAt: 'December 24, 2017 00:00:00', flipped: false, content: 'Eleven pipers piping'},
					{front: '25', unlockAt: 'December 25, 2017 00:00:00', flipped: false, content: '12 drummers drumming'}
				];

			}

		});

	}

	saveDays(){
		
		this.storage.set('adventDays', this.adventDays);

	}

	flipDay(day){

		if(!day.flipped && new Date(day.unlockAt) < new Date()){
			day.flipped = true;
			this.saveDays();
		}

	}

}
