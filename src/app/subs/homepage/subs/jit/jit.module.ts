import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { JitComponent } from './jit.component';
import { JitlistComponent } from './subs/jitlist/jitlist.component';

import { JitService } from './services/jit.service';
import { LoggerService } from './services/logger.service';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule
	],
	declarations: [
		JitComponent,
		JitlistComponent
	],
	providers:[JitService,LoggerService]
})
export class JitModule { }