import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { homepageRouting } from './homepage.routing';

import { HomepageComponent } from '../homepage/homepage.component';
import { PicsComponent } from './pics/pics.component';
import { ArticleComponent } from './article/article.component';

import { HighlightDirective } from './common/directives/highlight.directive';

import { AwesomePipe } from './common/pipes/awesome.pipe';

@NgModule({
	imports: [
		BrowserModule,
		homepageRouting
	],
	declarations: [
		HomepageComponent,
		PicsComponent,
		ArticleComponent,
		HighlightDirective,
		AwesomePipe
	]
})
export class HomepageModule { }