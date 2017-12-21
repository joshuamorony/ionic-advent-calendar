import { Component, Input } from '@angular/core';
 
@Component({
  selector: 'flash-card',
  templateUrl: 'flash-card.html'
})
export class FlashCardComponent {
 
	@Input('flipped') flipped: boolean = false;

	constructor() {

	}
 
}