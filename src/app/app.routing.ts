import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './subs/login/login.component';

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/login',
		pathMatch: 'full'
	},
	{
		path: 'login',
		component: LoginComponent
	}
];
export const routing = RouterModule.forRoot(appRoutes);