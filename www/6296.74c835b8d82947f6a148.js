(self.webpackChunkappGamoosh=self.webpackChunkappGamoosh||[]).push([[6296],{6296:(t,e,n)=>{"use strict";n.r(e),n.d(e,{TasksPageModule:()=>k});var o=n(8583),i=n(665),a=n(2859),c=n(216),s=n(4762),r=n(3018),l=n(1973);function d(t,e){1&t&&(r.TgZ(0,"ion-item"),r.TgZ(1,"ion-label"),r._uU(2," N\xe3o h\xe1 tarefas"),r.qZA(),r.qZA())}function u(t,e){if(1&t&&(r.TgZ(0,"ion-label"),r._uU(1),r.qZA()),2&t){const t=r.oxw().$implicit;r.xp6(1),r.Oqu(t.name)}}function f(t,e){if(1&t&&(r.TgZ(0,"ion-label"),r.TgZ(1,"del"),r._uU(2),r.qZA(),r.qZA()),2&t){const t=r.oxw().$implicit;r.xp6(2),r.Oqu(t.name)}}function m(t,e){1&t&&r._UZ(0,"ion-icon",14)}function p(t,e){1&t&&r._UZ(0,"ion-icon",15)}function h(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"ion-item-sliding"),r.TgZ(1,"ion-item",9),r.NdJ("click",function(){const e=r.CHM(t).$implicit;return r.oxw().openActions(e)}),r.YNc(2,u,2,1,"ion-label",4),r.YNc(3,f,3,1,"ion-label",4),r.YNc(4,m,1,0,"ion-icon",10),r.YNc(5,p,1,0,"ion-icon",11),r.qZA(),r.TgZ(6,"ion-item-options",12),r.TgZ(7,"ion-item-option",13),r.NdJ("click",function(){const e=r.CHM(t).$implicit;return r.oxw().delet(e)}),r._uU(8,"Excluir"),r.qZA(),r.qZA(),r.qZA()}if(2&t){const t=e.$implicit;r.xp6(2),r.Q6J("ngIf",!t.done),r.xp6(1),r.Q6J("ngIf",t.done),r.xp6(1),r.Q6J("ngIf",!t.done),r.xp6(1),r.Q6J("ngIf",t.done)}}const g=[{path:"",component:(()=>{class t{constructor(t,e,n,o){this.alertCtrl=t,this.toastCtrl=e,this.actionSheetCtrl=n,this.gamooshService=o,this.tasks=[];let i=localStorage.getItem("taskDb");null!=i&&(this.tasks=JSON.parse(i))}showAdd(){return(0,s.mG)(this,void 0,void 0,function*(){const t=yield this.alertCtrl.create({header:"Deseja adicionar uma atividade?",inputs:[{name:"newTask",type:"text",placeholder:"Descri\xe7\xe3o"},{name:"frequence",type:"text",placeholder:"Frenqu\xeancia"},{name:"score",type:"number",placeholder:"Pontua\xe7\xe3o"}],buttons:[{text:"Cancelar",role:"cancel",cssClass:"secondary",handler:()=>{console.log("Confirm Cancel")}},{text:"Adicionar",handler:t=>{this.add(t.newTask,t.frequence,t.score)}}]});yield t.present()})}add(t,e,n){return(0,s.mG)(this,void 0,void 0,function*(){if(t.trim().length<1)return void(yield this.toastCtrl.create({message:"Informe o que deseja fazer",duration:2e3,position:"top"})).present();const o={name:t,frenquecia:e,pontuacao:n,done:!1};this.tasks.push(o),this.gamooshService.addTask(o.name,o.frenquecia,o.pontuacao).then(t=>{console.log(t)}).catch(t=>{console.error(t)})})}updateLocalStorage(){localStorage.setItem("taskDb",JSON.stringify(this.tasks))}openActions(t){return(0,s.mG)(this,void 0,void 0,function*(){const e=yield this.actionSheetCtrl.create({header:"O que deseja fazer?",buttons:[{text:t.done?"Desmarcar":"Marcar",icon:t.done?"radio-button-off":"checkmark-circle",handler:()=>{t.done=!t.done,this.updateLocalStorage()}},{text:"Cancelar",icon:"close",handler:()=>{console.log("Cancel clicked")}}]});yield e.present()})}delet(t){this.tasks=this.tasks.filter(e=>t!=e),this.updateLocalStorage()}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(a.Br),r.Y36(a.yF),r.Y36(a.BX),r.Y36(l.N))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-tasks"]],decls:13,vars:3,consts:[["slot","start"],["menu","main-menu"],[3,"fullscreen"],[1,"animate__wobble"],[4,"ngIf"],[4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed"],[1,"add-button",3,"click"],["name","add"],[3,"click"],["slot","start","name","radio-button-off",4,"ngIf"],["slot","start","name","checkmark-circle","color","sucess",4,"ngIf"],["side","start"],["color","dark",3,"click"],["slot","start","name","radio-button-off"],["slot","start","name","checkmark-circle","color","sucess"]],template:function(t,e){1&t&&(r.TgZ(0,"ion-header"),r.TgZ(1,"ion-toolbar"),r.TgZ(2,"ion-title"),r._uU(3,"Cadastro de Tarefas"),r.qZA(),r.TgZ(4,"ion-buttons",0),r._UZ(5,"ion-menu-button",1),r.qZA(),r.qZA(),r.qZA(),r.TgZ(6,"ion-content",2),r.TgZ(7,"ion-list",3),r.YNc(8,d,3,0,"ion-item",4),r.YNc(9,h,9,4,"ion-item-sliding",5),r.qZA(),r.TgZ(10,"ion-fab",6),r.TgZ(11,"ion-fab-button",7),r.NdJ("click",function(){return e.showAdd()}),r._UZ(12,"ion-icon",8),r.qZA(),r.qZA(),r.qZA()),2&t&&(r.xp6(6),r.Q6J("fullscreen",!0),r.xp6(2),r.Q6J("ngIf",e.tasks.length<1),r.xp6(1),r.Q6J("ngForOf",e.tasks))},directives:[a.Gu,a.sr,a.wd,a.Sm,a.fG,a.W2,a.q_,o.O5,o.sg,a.IJ,a.W4,a.gu,a.Ie,a.Q$,a.td,a.IK,a.u8],styles:[".add-button[_ngcontent-%COMP%]{color:#5e7ccc}"]}),t})()}];let Z=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[c.Bz.forChild(g)],c.Bz]}),t})(),k=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[o.ez,i.u5,a.Pc,Z]]}),t})()}}]);