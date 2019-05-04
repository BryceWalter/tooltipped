import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-tooltip-content',
  templateUrl: './tooltip-content.component.html',
  styleUrls: ['./tooltip-content.component.scss']
})
export class TooltipContentComponent implements OnInit {

  @Input() tip: string;
  @Input() ref: any;

  ngOnInit() {
  }

  @HostListener('window:resize')
  onWindowResize(): void {

  }

}
