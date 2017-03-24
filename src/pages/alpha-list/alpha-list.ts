import {Component} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'alpha-list-page',
  templateUrl: 'alpha-list.html'
})
export class AlphaListPage {
  aa:any;
  currentPageClass = this;

  current: any;
  listContatos: any;

  //<ion-item (click)="currentPageClass.onItemClick(item)">
  alphaScrollItemTemplate: string = `
    <ion-item >
      <ion-checkbox [checked]="item.selected" (ionChange)="currentPageClass.change($event, item)" ></ion-checkbox>
      <ion-label>
        {{item.cod}}
      </ion-label>
    </ion-item>
  `;

  triggerAlphaScrollChange: number = 0;

  constructor() {
    this.carrega();
  }

  // onItemClick(item) {
  //   let itemIndex = _.findIndex(this.breeds, (b: any) => {
  //     return b.$t === item.$t;
  //   });
  //   this.breeds.splice(itemIndex, 1);
  //   this.triggerAlphaScrollChange++;
  // }

  change(event, item){
    console.log(item);
    item.selected = event.checked;
    console.log('cod: ' + item.cod + ' selected: ' + item.selected);

    for (var i = 0; i < this.listContatos.length; i++) {
      //var element = this.listContatos[i];
      if (this.listContatos[i].cod === item.cod) {
        console.log('listContatos before: ' + this.listContatos[i].cod + ' - ' + this.listContatos[i].selected);
        this.listContatos[i].selected = item.selected;
        console.log('listContatos after: ' + this.listContatos[i].cod + ' - ' + this.listContatos[i].selected);
      }
    }

  }

  apertou(){
    // <ion-buttons end>
    //<button ion-button (click)="apertou()">Botao mostra array</button>  
    // </ion-buttons>
    let arra = [];

    arra = this.aa.filter((item) => {
      return item.selected;
    })
    console.log(arra);
  }

  carrega(){
    this.aa = [];
     for (var i = 0; i < 100; i++) {
      this.aa.push({cod : i.toString(), selected : false});
    }

    this.aa.push({cod : "Aa1", selected : false});
    this.aa.push({cod : "Aa2", selected : false});
    this.aa.push({cod : "Aa3", selected : false});
    this.aa.push({cod : "BB", selected : false});
    this.aa.push({cod : "CC", selected : false});
    this.aa.push({cod : "DD", selected : false});
    this.aa.push({cod : " #", selected : false});
    // this.aa.push({cod : "!", selected : false});
    // this.aa.push({cod : "@", selected : false});
    // this.aa.push({cod : ".", selected : false});
    // this.aa.push({cod : ",", selected : false});
    // this.aa.push({cod : ";", selected : false});
    
    this.current = this.aa;
    this.listContatos = this.aa;
  }

  search(ev: any) {
    console.log("SEARCH");
    this.current = this.listContatos;

    console.log(ev.target.value);
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.current = this.current.filter((item) => {
        return (item.cod.toLowerCase().indexOf(val.toLowerCase()) >= 0);
      });
    }
  }

  onClear(clearEvent) {
    console.log("ONCLEAR");
    this.current = this.listContatos;
  }
}
