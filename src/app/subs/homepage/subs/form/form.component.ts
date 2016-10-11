import { Component } from '@angular/core';

@Component({
	selector: 'alphain-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.css']
})
export class FormComponent {
	model={
		name:'gsj'
	};
	active = true;
	submitted = false;
	onClickMe = function(xxx:Object,spy:Object){
		console.log(xxx);
	}
	onSubmit = function(){
		this.submitted = true;
	}
}