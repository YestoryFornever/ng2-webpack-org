import { Component } from '@angular/core';

import { AppService } from '../../../../services/app.service';

@Component({
	selector: 'alphain-article',
	templateUrl: './article.component.html',
	styleUrls: ['./article.component.css']
})
export class ArticleComponent { 
	article='';
	constructor(appService:AppService){
		this.article = appService.commonObj.article;
	}
}