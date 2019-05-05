import { Directive, OnDestroy, Input, HostListener, ElementRef, ViewChild } from '@angular/core';
import { TooltipService } from '../services/tooltip.service';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective implements OnDestroy {
  // Tooltip content
  @Input() tooltipText: string = "";

  // Tooltip position
  @Input() tooltipPosition: string = "";

  private id: number;

  constructor(
    private tooltipService: TooltipService,
    private element: ElementRef
  ) { }

  @HostListener("click", ['$event'])
  onClick(e): void {
    // Generate id for element, push element into array in service with the element reference 
    // of the parent component and the corresponding text
    this.id = Math.random();
    const { id, element, tooltipText, tooltipPosition, tooltipService } = this;
    
    const tooltipData = { 
      id: id, 
      ref: element, 
      tip: tooltipText,
      position: tooltipPosition
    }

    if (!tooltipService.components.length) {
      tooltipService.push(tooltipData);
    }
    if (this.tooltipService.components[0]) {
      if (this.tooltipService.components[0].ref !== element) {
        this.destroy();
        tooltipService.push(tooltipData);
      }
    }
    if (!this.element.nativeElement.contains(e.target)) {
      this.destroy();
    }
  }

  @HostListener("keyup", ['$event'])
  onKeyup(key): void {
    // Destroy tooltip if 'esc' key is pressed
    if (this.tooltipService.components.length && key.keyCode === 27) {
      this.destroy();
    }
  }

  ngOnDestroy(): void {
    this.destroy();
  }

  destroy(): void {
    // Remove tooltip at referenced id
    const i = this.tooltipService.components.findIndex((tip) => { 
      return tip.id === this.id;
    });
    this.tooltipService.components.splice(i, 1);
  }
}
