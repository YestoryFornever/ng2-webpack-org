import { Component } from '@angular/core';

export class Arr {
	constructor(
		public id: number,
		public name: string) { }
}

@Component({
	selector: 'alphain-iffor',
	templateUrl: './iffor.component.html',
	styleUrls: ['./iffor.component.css']
})
export class IfforComponent {
	arraies = [
		new Arr(1, 'Windstorm'),
		new Arr(13, 'Bombasto'),
		new Arr(15, 'Magneta'),
		new Arr(20, 'Tornado')
	];
}