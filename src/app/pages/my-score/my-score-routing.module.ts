import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyScorePage } from './my-score.page';

const routes: Routes = [
  {
    path: '',
    component: MyScorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyScorePageRoutingModule {}
