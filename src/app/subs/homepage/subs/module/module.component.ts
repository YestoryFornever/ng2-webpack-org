import { Component } from '@angular/core';
@Component({
	selector: 'alphain-module',
	templateUrl: './module.component.html',
	styleUrls: ['./module.component.css']
})
export class ModuleComponent {
	aaa:number;
	bbb:number;
	constructor(){
		this.aaa=1;
		this.bbb=2;
	}
	onChange=function(e:any,that:any){
		/*console.log(e);
		console.log(that);*/
	}
}