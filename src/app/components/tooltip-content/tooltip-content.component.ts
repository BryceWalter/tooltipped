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
    const { x, y } = elementPosition;
    // Get height of tooltip to move in either bottom or top direction
    const tooltipHeight =  this.element.nativeElement.firstChild.clientHeight;
    // Set element to absolute position
    this.renderer.setStyle(this.element.nativeElement, "position", "absolute")
    // If client requests top, move tooltip y amount of pixels away from element, minus it's own height
    // Reverse for bottom
    switch (this.position) {
      case 'bottom':
        this.renderer.setStyle(this.element.nativeElement, "left", `${x}px`)
        this.renderer.setStyle(this.element.nativeElement, "top", `${y + tooltipHeight + 10}px`)
        break;
      case 'top':
        this.renderer.setStyle(this.element.nativeElement, "left", `${x}px`)
        this.renderer.setStyle(this.element.nativeElement, "top", `${y - tooltipHeight - 10}px`)
        break;
      default: 
        this.renderer.setStyle(this.element.nativeElement, "left", `${x}px`)
        this.renderer.setStyle(this.element.nativeElement, "top", `${y}px`)
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.positionTooltip();
  }
}
