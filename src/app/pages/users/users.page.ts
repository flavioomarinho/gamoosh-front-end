import { GamooshService } from '../../services/gamoosh.service';
import { Component } from '@angular/core';
import { ActionSheetController, AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage {
  users : any[] = [];
  constructor(private alertCtrl : AlertController, private toastCtrl : ToastController,
    private actionSheetCtrl : ActionSheetController, private gamooshService : GamooshService) {
      let userJson = localStorage.getItem('userDb');
      if(userJson != null){
        this.users = JSON.parse(userJson);
      }
  }


  async showAdd(){
      const alert = await this.alertCtrl.create({
        header: 'Deseja adicionar um usuário?',
        inputs: [
          {
            name: 'newUser',
            type: 'text',
            placeholder: 'Nome'
          },
          {
            name: 'age',
            type: 'number',
            placeholder: 'Idade'
          },
          {
            name: 'idUser',
            type: 'text',
            placeholder: 'CPF'
          },
          {
            name: 'telephone',
            type: 'text',
            placeholder: 'Telefone'
          },
          {
            name: 'email',
            type: 'text',
            placeholder: 'E-mail'
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
              this.add(form.newUser, form.age, form.idUser, form.telephone, form.email);
                        }
          }
        ]
      }
      );
      await alert.present();

  };

  async add(nome:string, idade: number, cpf: string, telefone: string, mail: string){
    if(nome.trim().length <1){
      const toast = await this.toastCtrl.create({
        message : 'Informe o que deseja fazer',
        duration : 2000,
        position : 'top'
      });
      toast.present();
      return;
    }
    const user = { name : nome, age : idade, idUser : cpf, telephone:telefone, email:mail, done : false };
    this.users.push(user);

    this.gamooshService.addUser(user.name, user.age, user.idUser, user.telephone, user.email)
    .then((response)=>{
      console.log(response);

    })
    .catch((erro)=>{
      console.error(erro);
    });
  };

  updateLocalStorage(){
    localStorage.setItem('userDb',JSON.stringify(this.users));
  };

  async openActions(user : any){
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'O que deseja fazer?',
      buttons: [{
        text: user.done ? 'Desmarcar' : 'Marcar',
        icon: user.done ? 'radio-button-off' : 'checkmark-circle',
        handler: () => {
          user.done = !user.done;
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

  delet(user : any){
    this.users = this.users.filter(userArray=> user != userArray);
    this.updateLocalStorage();

  }

}
