import { 
	Component,
	Input,
	trigger,
	state,
	style,
	transition,
	animate 
} from '@angular/core';
@Component({
	selector: 'alphain-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	animations: [
		trigger('alphainState', [
			state('inactive', style({
				backgroundColor: '#555',
				transform: 'scale(1)'
			})),
			state('active',   style({
				backgroundColor: '#333',
				transform: 'scale(1.1)'
			})),
			transition('inactive => active', animate('100ms ease-in')),
			transition('active => inactive', animate('100ms ease-out'))
		])
	]
})
export class LoginComponent {
	animateKey="inactive";
	onClick(el:any,xxx:any){
		/*console.log(xxx);
		console.log(el.animateKey)*/
		el.animateKey = el.animateKey=='active'?"inactive":"active";
	}
}