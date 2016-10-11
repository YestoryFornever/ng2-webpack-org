import { Component } from '@angular/core';

export class Arr {
	constructor(
		public id: number,
		public name: string) { }
}

@Component({
	selector: 'alphain-databind',
	templateUrl: './databind.component.html',
	styleUrls: ['./databind.component.css']
})
export class DatabindComponent {
	test="init";
	arraies = [
		new Arr(1, 'Windstorm'),
		new Arr(13, 'Bombasto'),
		new Arr(15, 'Magneta'),
		new Arr(20, 'Tornado')
	];
	myArr = this.arraies[0];
	onClickMe = function(hero:Arr){
		this.test = hero.name+"的编号为:"+hero.id;
	}
	onKeyUpMe = function(event:KeyboardEvent){
		this.test = (<HTMLInputElement>event.target).value;
	}
	onKeyUpMePlus = function(str:string){
		this.test = str;
	}
	onKeyUpMePlusEnter = function(str:string){
		this.test = str;
	}
}