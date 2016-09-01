import { Directive, ElementRef, HostListener, Renderer, Input } from '@angular/core';

@Directive({ selector: '[in_highlight]' })
/** Highlight the attached element in gold */
export class HighlightDirective {
	/*constructor(renderer: Renderer, el: ElementRef) {
		renderer.setElementStyle(el.nativeElement, 'backgroundColor', '#c30e2e');
		console.log(`* AppRoot highlight called for ${el.nativeElement.tagName}`);
		@host
	}*/
	private _defaultColor = '#c30e2e';
	private el:HTMLElement;
	constructor(el:ElementRef){this.el = el.nativeElement}
	@Input() set defatultColor(colorName:string){
		this._defaultColor = colorName||this._defaultColor
	}

	@Input('in_highlight') highlightColor: string;

	@HostListener('mouseenter') onMouseEnter() {
		this.highlight(this.highlightColor || this._defaultColor, 'white');
	}

	@HostListener('mouseleave') onMouseLeave() {
		this.highlight(null,null);
	}

	private highlight(color:string,fontColor: string) {
		this.el.style.backgroundColor = color;
		this.el.style.color = fontColor;
	}
}
