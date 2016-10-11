import { Component } from '@angular/core';
import { Jit } from '../../jit';
import { JitService } from '../../services/jit.service';
@Component({
	selector:'alphain-jitlist',
	templateUrl:'jitlist.component.html',
	styleUrls:['jitlist.component.css']
})
export class JitlistComponent{
	jits: Jit[];
	constructor(jitService: JitService) {
	    this.jits = jitService.getJits();
	}
}