import { TasksPage } from './../tasks/tasks.page';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component} from '@angular/core';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.page.html',
  styleUrls: ['./my-tasks.page.scss'],
})
export class MyTasksPage {

  listOne = ['Lavar roupa','Comprar pão','Limpar chão','Limpar banheiro'];
  listTwo = [];


  constructor(private taskPage: TasksPage) {
    let i=0;
    for(i;i<this.taskPage.getTasks().length;i++){
      this.listTwo [i] = [this.taskPage.getTasks()[i]];

    }


  }


  drop(event: CdkDragDrop<string[]>){
    if(event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

    }else{
      transferArrayItem(event.previousContainer.data,event.container.data, event.previousIndex, event.currentIndex);
  }
  }

}
