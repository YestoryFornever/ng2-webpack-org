import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { HomepageModule } from './homepage/homepage.module';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

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
	bootstrap: [ AppComponent ]
})
export class AppModule { }
