import { GamooshService } from '../../services/gamoosh.service';
import { Component } from '@angular/core';
import { ActionSheetController, AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-reward',
  templateUrl: './rewards.page.html',
  styleUrls: ['./rewards.page.scss'],
})
export class RewardsPage {

  rewards : any[] = [];
  constructor(private alertCtrl : AlertController, private toastCtrl : ToastController,
    private actionSheetCtrl : ActionSheetController, private gamooshService : GamooshService) {
      let rewardJson = localStorage.getItem('rewardDb');
      if(rewardJson != null){
        this.rewards = JSON.parse(rewardJson);
      }
  }


  async showAdd(){
      const alert = await this.alertCtrl.create({
        header: 'Deseja adicionar uma recompensa?',
        inputs: [
          {
            name: 'newReward',
            type: 'text',
            placeholder: 'Descrição'
          },
          {
            name: 'value',
            type: 'number',
            placeholder: 'Valor'
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
              this.add(form.newReward, form.value);
                        }
          }
        ]
      }
      );
      await alert.present();

  };

  async add(nome:string, valor: number){
    if(nome.trim().length <1){
      const toast = await this.toastCtrl.create({
        message : 'Informe o que deseja fazer',
        duration : 2000,
        position : 'top'
      });
      toast.present();
      return;
    }
    const reward = { name : nome, value : valor, done : false };
    this.rewards.push(reward);

    this.gamooshService.addReward(reward.name, reward.value)
    .then((response)=>{
      console.log(response);

    })
    .catch((erro)=>{
      console.error(erro);
    });
  };

  updateLocalStorage(){
    localStorage.setItem('rewardDb',JSON.stringify(this.rewards));
  };

  async openActions(reward : any){
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'O que deseja fazer?',
      buttons: [{
        text: reward.done ? 'Desmarcar' : 'Marcar',
        icon: reward.done ? 'radio-button-off' : 'checkmark-circle',
        handler: () => {
          reward.done = !reward.done;
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

  delet(reward : any){
    this.rewards = this.rewards.filter(rewardArray=> reward != rewardArray);
    this.updateLocalStorage();

  }

}
