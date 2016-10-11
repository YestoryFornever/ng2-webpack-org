import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { homepageRouting } from './homepage.routing';

import { JitModule } from './subs/jit/jit.module';
import { HeroModule } from './subs/hero/hero.module';

import { HomepageComponent } from '../homepage/homepage.component';
import { PicsComponent } from './subs/pics/pics.component';
import { ArticleComponent } from './subs/article/article.component';
import { ErrorComponent } from './subs/error/error.component';
import { NavComponent } from './subs/nav/nav.component';
import { DatabindComponent } from './subs/databind/databind.component';
import { IfforComponent } from './subs/iffor/iffor.component';
import { FormComponent } from './subs/form/form.component';
import { ModuleComponent } from './subs/module/module.component';

import { HighlightDirective } from './directives/highlight.directive';

import { AwesomePipe } from './pipes/awesome.pipe';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		homepageRouting,
		JitModule,
		HeroModule
	],
	declarations: [
		HomepageComponent,
		PicsComponent,
		ArticleComponent,
		ErrorComponent,
		NavComponent,
		DatabindComponent,
		IfforComponent,
		FormComponent,
		ModuleComponent,

		HighlightDirective,
		AwesomePipe
	]
})
export class HomepageModule { }