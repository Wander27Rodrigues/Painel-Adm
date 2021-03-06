import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PainelSimplesComponent } from './painel-simples/painel-simples.component';


@NgModule({
  declarations: [
    AppComponent,
    PainelSimplesComponent,    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
