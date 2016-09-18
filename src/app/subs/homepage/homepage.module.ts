import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { homepageRouting } from './homepage.routing';

import { HomepageComponent } from '../homepage/homepage.component';
import { PicsComponent } from './subs/pics/pics.component';
import { ArticleComponent } from './subs/article/article.component';
import { ErrorComponent } from './subs/error/error.component';
import { NavComponent } from './subs/nav/nav.component';

import { HighlightDirective } from './directives/highlight.directive';

import { AwesomePipe } from './pipes/awesome.pipe';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		homepageRouting
	],
	declarations: [
		HomepageComponent,
		PicsComponent,
		ArticleComponent,
		ErrorComponent,
		NavComponent,

		HighlightDirective,
		AwesomePipe
	]
})
export class HomepageModule { }