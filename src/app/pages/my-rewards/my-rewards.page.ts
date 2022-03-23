import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component} from '@angular/core';

@Component({
  selector: 'app-my-rewards',
  templateUrl: './my-rewards.page.html',
  styleUrls: ['./my-rewards.page.scss'],
})
export class MyRewardsPage {


  listOne = ['Sushi', 'X Salada', 'Spa', 'Passeio'];
  listTwo = ['Dormir'];


  constructor() { }

  drop(event: CdkDragDrop<string[]>){
    if(event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }else{
      transferArrayItem(event.previousContainer.data,event.container.data, event.previousIndex, event.currentIndex);
    }



  }


}
