import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { homepageRouting } from './homepage.routing';

import { HomepageComponent } from '../homepage/homepage.component';
import { PicsComponent } from './subs/pics/pics.component';
import { ArticleComponent } from './subs/article/article.component';
import { ErrorComponent } from './subs/error/error.component';

import { HighlightDirective } from './directives/highlight.directive';

import { AwesomePipe } from './pipes/awesome.pipe';

@NgModule({
	imports: [
		BrowserModule,
		homepageRouting
	],
	declarations: [
		HomepageComponent,
		PicsComponent,
		ArticleComponent,
		ErrorComponent,
		HighlightDirective,
		AwesomePipe
	]
})
export class HomepageModule { }