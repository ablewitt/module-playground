import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ayeModule = () => import('./root-aye/root-aye.module').then(x => x.RootAyeModule);

const routes: Routes = [
  { path: 'root-aye', loadChildren: ayeModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
