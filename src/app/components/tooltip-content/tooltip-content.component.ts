import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-tooltip-content',
  templateUrl: './tooltip-content.component.html',
  styleUrls: ['./tooltip-content.component.scss']
})
export class TooltipContentComponent implements OnInit {

  @Input() title: string;
  @Input() ref: any;

  ngOnInit() {
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    
  }

}
