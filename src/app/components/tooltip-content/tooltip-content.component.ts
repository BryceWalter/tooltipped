import { Component, OnInit, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-tooltip-content',
  templateUrl: './tooltip-content.component.html',
  styleUrls: ['./tooltip-content.component.scss']
})
export class TooltipContentComponent implements OnInit {

  @Input() tip: string;
  @Input() ref: any;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.appendChild(this.ref.nativeElement, this.element.nativeElement)
  }

  @HostListener('window:resize')
  onWindowResize(): void {

  }

}
