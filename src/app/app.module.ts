import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { HomepageModule } from './subs/homepage/homepage.module';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './subs/login/login.component';

import { AppService } from './services/app.service';

@NgModule({
	imports: [
		BrowserModule,
		HomepageModule,
		routing
	],
	declarations: [
		AppComponent,
		LoginComponent
	],
	providers:[
		AppService
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
