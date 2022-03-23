import { TasksPage } from './../tasks/tasks.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MyTasksPageRoutingModule } from './my-tasks-routing.module';
import { MyTasksPage } from './my-tasks.page';
import{DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyTasksPageRoutingModule,
    DragDropModule  ],
  declarations: [MyTasksPage]
})
export class MyTasksPageModule {}
