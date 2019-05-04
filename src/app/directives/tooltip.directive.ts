import { Directive, OnDestroy, Input, HostListener, ElementRef } from '@angular/core';
import { TooltipService } from '../services/tooltip.service';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective implements OnDestroy {

  @Input() tooltipText: string = "Nutso";

  private id: number;

  constructor(private tooltipService: TooltipService, private element: ElementRef) { }

  @HostListener("click", ['$event.target'])
  onClick(button): void {
    console.log(button)
    console.log(this.tooltipText)
    // console.log(this.tooltipText = 'what')
    console.log(this.element)
    this.id = Math.random();
    this.tooltipService.push({ 
      id: this.id, 
      ref: this.element, 
      tip: this.tooltipText
    });
  }

  @HostListener("keyup", ['$event'])
  onKeyup(key): void {
    if (this.tooltipService.components.length && key.keyCode === 27) {
      this.destroy();
    }
  }

  ngOnDestroy(): void {
    this.destroy();
  }

  destroy(): void {
    const i = this.tooltipService.components.findIndex((tip) => { 
      return tip.id === this.id; 
    });
    this.tooltipService.components.splice(i, 1);
  }
}
