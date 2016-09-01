import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from '../homepage/homepage.component';
import { PicsComponent } from './subs/pics/pics.component';
import { ArticleComponent } from './subs/article/article.component';
import { ErrorComponent } from './subs/error/error.component';

const homepageRoutes: Routes = [
	{
		path: 'homepage',
		component: HomepageComponent,
		children:[
			{
				path:'',
				redirectTo: 'article', 
				pathMatch: 'full'
			},	
			{
				path: 'article',
				component: ArticleComponent
			},
			{
				path: 'article',
				component: ArticleComponent,
				outlet:'header'
			},
			{
				path: 'article',
				component: ArticleComponent,
				outlet:'footer'
			},
			{
				path: 'pics',
				component: PicsComponent
			},
			{
				path: 'pics',
				component: PicsComponent,
				outlet:'header'
			},
			{
				path: 'pics',
				component: PicsComponent,
				outlet:'footer'
			},
			{
				path: 'error',
				component: ErrorComponent
			},
			{
				path: 'error',
				component: ErrorComponent,
				outlet:'header'
			},
			{
				path: 'error',
				component: ErrorComponent,
				outlet:'footer'
			}
		]
	}
];
export const homepageRouting = RouterModule.forRoot(homepageRoutes);