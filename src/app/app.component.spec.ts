import { TestBed,inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('App', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({ declarations: [AppComponent]});
	});
	it ('should work', inject([AppComponent], (app: AppComponent) => {
		// Add real test here
		expect(2).toBe(2);
	}));
});
