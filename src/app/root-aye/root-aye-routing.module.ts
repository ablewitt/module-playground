import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {Aye1ComponentComponent} from "./aye1.component/aye1.component.component";
import {Aye2ComponentComponent} from "./aye2.component/aye2.component.component";

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {path: 'aye1', component: Aye1ComponentComponent},
      {path: 'aye2', component: Aye2ComponentComponent}
    ]
  },
  {path: 'aye2', component: Aye2ComponentComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootAyeRoutingModule { }
