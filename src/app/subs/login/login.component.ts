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
			transition('void=>inactive',[
				style({
					transform: 'translateY(100%)'
				}),
				animate(300)
			]),
			transition('inactive=>void',[style({
				transform: 'translateY(-100%)'
			}),animate(100)]),
			transition('inactive => active', animate('0.2s 100ms ease-in')),
			transition('active => inactive', animate('0.2s 100ms ease-out'))
		])
	]
})
export class LoginComponent {
	animateKey="inactive";
	onClick(el:any,xxx:any){//el获取当前组件;xxx获取当前dom对象
		/*console.log(xxx);
		console.log(el.animateKey)*/
		el.animateKey = el.animateKey=='active'?"inactive":"active";
	}
}