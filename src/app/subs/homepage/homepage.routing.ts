import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from '../homepage/homepage.component';
import { PicsComponent } from './subs/pics/pics.component';
import { ArticleComponent } from './subs/article/article.component';
import { ErrorComponent } from './subs/error/error.component';
import { DatabindComponent } from './subs/databind/databind.component';
import { IfforComponent } from './subs/iffor/iffor.component';
import { FormComponent } from './subs/form/form.component';
import { JitComponent } from './subs/jit/jit.component';
import { ModuleComponent } from './subs/module/module.component';
import { HeroComponent } from './subs/hero/hero.component';

const homepageRoutes: Routes = [
	{
		path: 'homepage',
		component: HomepageComponent,
		children:[
			{
				path:'',
				redirectTo: 'form', 
				//redirectTo: 'init', 
				pathMatch: 'full'
			},	
			{
				path:'init',
				children:[
					{
						path: '',
						component: ErrorComponent
					},
					{
						path: '',
						component: ErrorComponent,
						outlet:'header'
					}
				]
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
			},
			{
				path:'iffor',
				component: IfforComponent
			},
			{
				path:'databind',
				component: DatabindComponent
			},
			{
				path:'form',
				component: FormComponent
			},
			{
				path:'jit',
				component: JitComponent
			},
			{
				path:'module',
				component: ModuleComponent
			},
			{
				path:'hero',
				component:HeroComponent
			}
		]
	}
];
export const homepageRouting = RouterModule.forRoot(homepageRoutes);