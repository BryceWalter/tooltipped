import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TooltipService {

  public components: any[] = [];

  public tooltipObserver = from(this.components)

  public push(e): void {
    this.components.push(e);
  }

}
