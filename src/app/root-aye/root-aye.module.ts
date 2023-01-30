import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RootAyeRoutingModule } from './root-aye-routing.module';
import { Aye1Component } from './aye1/aye1.component';
import { Aye2Component } from './aye2/aye2.component';


@NgModule({
  declarations: [
    LayoutComponent,
    Aye1Component,
    Aye2Component
  ],
  imports: [
    CommonModule,
    RootAyeRoutingModule
  ]
})
export class RootAyeModule { }
