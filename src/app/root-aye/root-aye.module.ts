import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Aye1ComponentComponent } from './aye1.component/aye1.component.component';
import { LayoutComponent } from './layout/layout.component';
import { RootAyeRoutingModule } from './root-aye-routing.module';
import { Aye2ComponentComponent } from './aye2.component/aye2.component.component';


@NgModule({
  declarations: [
    Aye1ComponentComponent,
    LayoutComponent,
    Aye2ComponentComponent
  ],
  imports: [
    CommonModule,
    RootAyeRoutingModule
  ]
})
export class RootAyeModule { }
