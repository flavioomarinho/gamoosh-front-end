import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyScorePageRoutingModule } from './my-score-routing.module';

import { MyScorePage } from './my-score.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyScorePageRoutingModule
  ],
  declarations: [MyScorePage]
})
export class MyScorePageModule {}
