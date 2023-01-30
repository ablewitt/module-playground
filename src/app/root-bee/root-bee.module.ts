import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bee1Component } from './bee1/bee1.component';



@NgModule({
  declarations: [
    Bee1Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Bee1Component
  ]
})
export class RootBeeModule { }
