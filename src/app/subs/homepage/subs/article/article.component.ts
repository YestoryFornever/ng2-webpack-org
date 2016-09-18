import { Component } from '@angular/core';

import { AppService } from '../../../../services/app.service';

export class Arr {
	constructor(
		public id: number,
		public name: string) { }
}


@Component({
	selector: 'alphain-article',
	templateUrl: './article.component.html',
	styleUrls: ['./article.component.css']
})
export class ArticleComponent { 
	constructor(appService:AppService){
		this.article = appService.commonObj.article;
	}
	article='';

	test="init";
	arraies = [
		new Arr(1, 'Windstorm'),
		new Arr(13, 'Bombasto'),
		new Arr(15, 'Magneta'),
		new Arr(20, 'Tornado')
	];
	myArr = this.arraies[0];
	onClickMe = function(hero:Arr){
		this.test = hero.name+"µÄ±àºÅÎª:"+hero.id;
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