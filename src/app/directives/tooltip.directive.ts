import { Directive, OnDestroy, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective implements OnDestroy {

  @Input() tooltipText: string = "";

  @HostListener("click", ['$event.target'])
  onClick(button): void {
    console.log('noice' + button)
  }

  @HostListener("keyup", ['$event.target'])
  onKeyup(key): void {
    console.log('alrighty' + key)
  }

  ngOnDestroy(): void {

  }
}
