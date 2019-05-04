import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TooltipService {

  components: any[] = [];

  push(e): void {
    this.components.push(e);
  }
}
