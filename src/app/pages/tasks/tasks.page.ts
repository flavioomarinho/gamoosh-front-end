import { GamooshService } from '../../services/gamoosh.service';
import { Component } from '@angular/core';
import { ActionSheetController, AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tasks',
  templateUrl: 'tasks.page.html',
  styleUrls: ['tasks.page.scss'],
})
export class TasksPage {

  tasks : any[] = [];

  constructor(private alertCtrl : AlertController, private toastCtrl : ToastController,
    private actionSheetCtrl : ActionSheetController, private gamooshService : GamooshService) {
      let taskJson = localStorage.getItem('taskDb');
      if(taskJson != null){
        this.tasks = JSON.parse(taskJson);
      }
  }


  async showAdd(){
      const alert = await this.alertCtrl.create({
        header: 'Deseja adicionar uma atividade?',
        inputs: [
          {
            name: 'newTask',
            type: 'text',
            placeholder: 'Descrição'
          },
          {
            name: 'frequence',
            type: 'text',
            placeholder: 'Frenquência'
          },
          {
            name: 'score',
            type: 'number',
            placeholder: 'Pontuação'
          }

        ],

        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          },
          {
            text: 'Adicionar',
            handler: (form) => {
              this.add(form.newTask, form.frequence, form.score);
                        }
          }
        ]
      }
      );
      await alert.present();

  };

  async add(newTask:string, frequence: string, score: number){
    if(newTask.trim().length <1){
      const toast = await this.toastCtrl.create({
        message : 'Informe o que deseja fazer',
        duration : 2000,
        position : 'top'
      });
      toast.present();
      return;
    }
    const task = { name : newTask, frenquecia : frequence, pontuacao : score, done : false };
    this.tasks.push(task);

    this.gamooshService.addTask(task.name, task.frenquecia, task.pontuacao)
    .then((response)=>{
      console.log(response);

    })
    .catch((erro)=>{
      console.error(erro);
    });
  };

  updateLocalStorage(){
    localStorage.setItem('taskDb',JSON.stringify(this.tasks));
  };

  async openActions(task : any){
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'O que deseja fazer?',
      buttons: [{
        text: task.done ? 'Desmarcar' : 'Marcar',
        icon: task.done ? 'radio-button-off' : 'checkmark-circle',
        handler: () => {
          task.done = !task.done;
          this.updateLocalStorage();
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  delet(task : any){

    this.tasks = this.tasks.filter(taskArray=> task != taskArray);
    this.updateLocalStorage();

  }

  getTasks(){
     const task = ['tchubaca','ioda','leia'];
     return task;
  }

}

