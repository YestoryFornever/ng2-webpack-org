import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';

@Directive({ selector: '[in_highlight]' })
/** Highlight the attached element in gold */
export class HighlightDirective {
	/*constructor(renderer: Renderer, el: ElementRef) {
		renderer.setElementStyle(el.nativeElement, 'backgroundColor', '#c30e2e');
		console.log(`* AppRoot highlight called for ${el.nativeElement.tagName}`);
		@host
	}*/
	private el:HTMLElement;
	constructor(el:ElementRef){this.el = el.nativeElement}
	@HostListener('mouseenter') onMouseEnter() {
		this.highlight('#c30e2e','30px');
	}
	@HostListener('mouseleave') onMouseLeave() {
		this.highlight(null,null);
	}
	private highlight(color:string,size: string) {
		this.el.style.backgroundColor = color;
		this.el.style.fontSize = size;
	}
}
