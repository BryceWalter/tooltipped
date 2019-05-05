import { Directive, ElementRef, Output, EventEmitter, HostListener, Input } from '@angular/core';
import { TooltipService } from '../services/tooltip.service';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {
  @Input() private ignoreClick: any;

  constructor(private element: ElementRef, private tooltipService: TooltipService) { }

  @Output() public clickOutside = new EventEmitter();

  @HostListener('document:click', ['$event'])
  public onClick(e) {
    const clickedInside = this.element.nativeElement.contains(e.target);
    const notClickedIgnore = this.ignoreClick.nativeElement.contains(e.target)
    if (!clickedInside && !notClickedIgnore) {
      console.log('ok')
      this.tooltipService.components.pop();
    }
  }

}
