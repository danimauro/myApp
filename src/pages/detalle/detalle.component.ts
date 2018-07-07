import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//clases
import { ListaItem, Lista } from '../../app/clases/index';
//servicio

import { ListaDeseosService  } from '../../app/services/lista-deseos.service';
//alerts

import { AlertController } from 'ionic-angular';

@Component({
    selector: 'app-detalle',
    templateUrl: 'detalle.component.html'
})

export class DetalleComponent{

    idx:number;
    lista:Lista;

    constructor(private navCtrl:NavController, 
                private navParams: NavParams,
                private _listaDeseosService:ListaDeseosService,
                private alertCtrl:AlertController){
        
        this.idx = this.navParams.get("idx");
        this.lista = this.navParams.get("lista");

    }

    actualizar( item:ListaItem ){

        item.completado = !item.completado;
        let todosMarcados = true;

        for(let item of this.lista.items ){
            if(!item.completado){
                todosMarcados = false;
                break;
            }
        }
        this.lista.terminado = todosMarcados;
        this._listaDeseosService.actualizarData();

    }

    borrarItem(){

        const confirm = this.alertCtrl.create({
            title: this.lista.nombre,
            message: 'Esta eliminado la lista, esta seguro de realizar el proceso?',
            buttons: ['Cancelar',
              {
                text: 'Eliminar',
                handler: () => {
                  this._listaDeseosService.eliminarLista(this.idx);
                  this.navCtrl.pop();
                }
              }
            ]
        });
        confirm.present();

    }
}