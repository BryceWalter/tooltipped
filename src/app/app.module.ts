import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Importing a few material components for flair
import { MatToolbarModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TooltipDirective } from './directives/tooltip.directive';
import { TooltipContentComponent } from './components/tooltip-content/tooltip-content.component';
import { TooltipContainerComponent } from './components/tooltip-container/tooltip-container.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';


@NgModule({
  declarations: [
    AppComponent,
    TooltipDirective,
    TooltipContentComponent,
    TooltipContainerComponent,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
