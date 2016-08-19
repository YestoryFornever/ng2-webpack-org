import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
	imports: [
		BrowserModule,
		routing
	],
	declarations: [
		AppComponent,
		LoginComponent,
		HomepageComponent
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
