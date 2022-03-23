import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamooshService {

  constructor(private http: HttpClient) { }

  addTask(tarefa: string, frequencia: string, pontuacao: number) {
    const url = 'https://gamoosh.herokuapp.com/api/task';

    const header = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    };

    const param = { name: tarefa, frequence: frequencia, score: pontuacao };
    return this.http.post(url, param, header).toPromise();
  };

  addUser(nome: string, idade: number, cpf: string, telefone: string, mail: string) {
    const url = 'https://gamoosh.herokuapp.com/api/user';

    const header = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    };

    const param = { name: nome, age: idade, idUser: cpf, telephone: telefone, email: mail };
    return this.http.post(url, param, header).toPromise();
  };

  addReward(nome: string, valor: number) {
    const url = 'https://gamoosh.herokuapp.com/api/reward';

    const header = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    };

    const param = { name: nome, value: valor };
    return this.http.post(url, param, header).toPromise();
  };


}




