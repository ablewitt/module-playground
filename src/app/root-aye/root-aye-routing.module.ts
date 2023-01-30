import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {Aye1Component} from "./aye1/aye1.component";
import {Aye2Component} from "./aye2/aye2.component";


const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {path: 'aye1', component: Aye1Component},
      {path: 'aye2', component: Aye2Component}
    ]
  },
  {path: 'aye2', component: Aye2Component}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootAyeRoutingModule { }
