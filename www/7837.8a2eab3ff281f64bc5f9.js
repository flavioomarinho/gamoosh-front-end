(self.webpackChunkappGamoosh=self.webpackChunkappGamoosh||[]).push([[7837],{7837:(e,t,o)=>{"use strict";o.r(t),o.d(t,{RewardsPageModule:()=>w});var n=o(8583),i=o(665),r=o(2859),a=o(216),c=o(4762),s=o(3018),l=o(1973);function d(e,t){1&e&&(s.TgZ(0,"ion-item"),s.TgZ(1,"ion-label"),s._uU(2," N\xe3o h\xe1 tarefas"),s.qZA(),s.qZA())}function u(e,t){if(1&e&&(s.TgZ(0,"ion-label"),s._uU(1),s.qZA()),2&e){const e=s.oxw().$implicit;s.xp6(1),s.Oqu(e.name)}}function m(e,t){if(1&e&&(s.TgZ(0,"ion-label"),s.TgZ(1,"del"),s._uU(2),s.qZA(),s.qZA()),2&e){const e=s.oxw().$implicit;s.xp6(2),s.Oqu(e.name)}}function f(e,t){1&e&&s._UZ(0,"ion-icon",14)}function p(e,t){1&e&&s._UZ(0,"ion-icon",15)}function h(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"ion-item-sliding"),s.TgZ(1,"ion-item",9),s.NdJ("click",function(){const t=s.CHM(e).$implicit;return s.oxw().openActions(t)}),s.YNc(2,u,2,1,"ion-label",4),s.YNc(3,m,3,1,"ion-label",4),s.YNc(4,f,1,0,"ion-icon",10),s.YNc(5,p,1,0,"ion-icon",11),s.qZA(),s.TgZ(6,"ion-item-options",12),s.TgZ(7,"ion-item-option",13),s.NdJ("click",function(){const t=s.CHM(e).$implicit;return s.oxw().delet(t)}),s._uU(8,"Excluir"),s.qZA(),s.qZA(),s.qZA()}if(2&e){const e=t.$implicit;s.xp6(2),s.Q6J("ngIf",!e.done),s.xp6(1),s.Q6J("ngIf",e.done),s.xp6(1),s.Q6J("ngIf",!e.done),s.xp6(1),s.Q6J("ngIf",e.done)}}const g=[{path:"",component:(()=>{class e{constructor(e,t,o,n){this.alertCtrl=e,this.toastCtrl=t,this.actionSheetCtrl=o,this.gamooshService=n,this.rewards=[];let i=localStorage.getItem("rewardDb");null!=i&&(this.rewards=JSON.parse(i))}showAdd(){return(0,c.mG)(this,void 0,void 0,function*(){const e=yield this.alertCtrl.create({header:"Deseja adicionar uma recompensa?",inputs:[{name:"newReward",type:"text",placeholder:"Descri\xe7\xe3o"},{name:"value",type:"number",placeholder:"Valor"}],buttons:[{text:"Cancelar",role:"cancel",cssClass:"secondary",handler:()=>{console.log("Confirm Cancel")}},{text:"Adicionar",handler:e=>{this.add(e.newReward,e.value)}}]});yield e.present()})}add(e,t){return(0,c.mG)(this,void 0,void 0,function*(){if(e.trim().length<1)return void(yield this.toastCtrl.create({message:"Informe o que deseja fazer",duration:2e3,position:"top"})).present();const o={name:e,value:t,done:!1};this.rewards.push(o),this.gamooshService.addReward(o.name,o.value).then(e=>{console.log(e)}).catch(e=>{console.error(e)})})}updateLocalStorage(){localStorage.setItem("rewardDb",JSON.stringify(this.rewards))}openActions(e){return(0,c.mG)(this,void 0,void 0,function*(){const t=yield this.actionSheetCtrl.create({header:"O que deseja fazer?",buttons:[{text:e.done?"Desmarcar":"Marcar",icon:e.done?"radio-button-off":"checkmark-circle",handler:()=>{e.done=!e.done,this.updateLocalStorage()}},{text:"Cancelar",icon:"close",handler:()=>{console.log("Cancel clicked")}}]});yield t.present()})}delet(e){this.rewards=this.rewards.filter(t=>e!=t),this.updateLocalStorage()}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(r.Br),s.Y36(r.yF),s.Y36(r.BX),s.Y36(l.N))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-reward"]],decls:13,vars:3,consts:[["slot","start"],["menu","main-menu"],[3,"fullscreen"],[1,"animate__wobble"],[4,"ngIf"],[4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed"],[1,"add-button",3,"click"],["name","add"],[3,"click"],["slot","start","name","radio-button-off",4,"ngIf"],["slot","start","name","checkmark-circle","color","sucess",4,"ngIf"],["side","start"],["color","dark",3,"click"],["slot","start","name","radio-button-off"],["slot","start","name","checkmark-circle","color","sucess"]],template:function(e,t){1&e&&(s.TgZ(0,"ion-header"),s.TgZ(1,"ion-toolbar"),s.TgZ(2,"ion-title"),s._uU(3,"Cadastro de Recompensas"),s.qZA(),s.TgZ(4,"ion-buttons",0),s._UZ(5,"ion-menu-button",1),s.qZA(),s.qZA(),s.qZA(),s.TgZ(6,"ion-content",2),s.TgZ(7,"ion-list",3),s.YNc(8,d,3,0,"ion-item",4),s.YNc(9,h,9,4,"ion-item-sliding",5),s.qZA(),s.TgZ(10,"ion-fab",6),s.TgZ(11,"ion-fab-button",7),s.NdJ("click",function(){return t.showAdd()}),s._UZ(12,"ion-icon",8),s.qZA(),s.qZA(),s.qZA()),2&e&&(s.xp6(6),s.Q6J("fullscreen",!0),s.xp6(2),s.Q6J("ngIf",t.rewards.length<1),s.xp6(1),s.Q6J("ngForOf",t.rewards))},directives:[r.Gu,r.sr,r.wd,r.Sm,r.fG,r.W2,r.q_,n.O5,n.sg,r.IJ,r.W4,r.gu,r.Ie,r.Q$,r.td,r.IK,r.u8],styles:[".add-button[_ngcontent-%COMP%]{color:#5e7ccc}"]}),e})()}];let Z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[a.Bz.forChild(g)],a.Bz]}),e})(),w=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[n.ez,i.u5,r.Pc,Z]]}),e})()}}]);