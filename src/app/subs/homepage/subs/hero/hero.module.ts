import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HeroComponent } from './hero.component';
import { HeroDetailComponent } from './subs/hero-detail/hero-detail.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule
	],
	declarations: [
		HeroComponent,
		HeroDetailComponent,
	],
	providers:[]
})
export class HeroModule { }