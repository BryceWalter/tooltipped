import { Component, OnInit, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { TooltipService } from 'src/app/services/tooltip.service';

@Component({
  selector: 'app-tooltip-content',
  templateUrl: './tooltip-content.component.html',
  styleUrls: ['./tooltip-content.component.scss']
})
export class TooltipContentComponent {

  @Input() tip: string;
  @Input() ref: any;
  @Input() position: string;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit() {
    this.positionTooltip();
  }

  private positionTooltip() {
    // Get position of trigger element in document
    const elementPosition = this.ref.nativeElement.getBoundingClientRect();
    const { left, top, height } = elementPosition;
    const trueTop = top + document.documentElement.scrollTop;
    // Get height of tooltip to move in either bottom or top direction
    const tooltipHeight =  this.element.nativeElement.firstChild.clientHeight;
    // Set element to absolute position
    this.renderer.setStyle(this.element.nativeElement, "position", "absolute")
    // If client requests top, move tooltip y amount of pixels away from element, minus it's own height
    // Reverse for bottom
    switch (this.position) {
      case 'bottom':
        this.renderer.setStyle(this.element.nativeElement, "left", `${left}px`)
        this.renderer.setStyle(this.element.nativeElement, "top", `${trueTop + height + 10}px`)
        break;
      case 'top':
        this.renderer.setStyle(this.element.nativeElement, "left", `${left}px`)
        this.renderer.setStyle(this.element.nativeElement, "top", `${trueTop - tooltipHeight - 10}px`)
        break;
      default: 
        this.renderer.setStyle(this.element.nativeElement, "left", `${left}px`)
        this.renderer.setStyle(this.element.nativeElement, "top", `${trueTop + height + 10}px`)
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(e) {
    this.positionTooltip();
  }

  @HostListener('window:scroll', ['$event']) 
    doSomething(event) {
      const tooltipPosition = this.element.nativeElement.getBoundingClientRect();
      const elementPosition = this.ref.nativeElement.getBoundingClientRect();
      const { left, top, height } = elementPosition;
      const trueTop = top + document.documentElement.scrollTop;
      if (this.position === 'top') {
        if (window.pageYOffset >= (tooltipPosition.top + document.documentElement.scrollTop)) {
          this.renderer.setStyle(this.element.nativeElement, "left", `${left}px`)
          this.renderer.setStyle(this.element.nativeElement, "top", `${trueTop + height + 10}px`)
        }
      }
    }
}
