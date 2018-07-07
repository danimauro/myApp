import { Component } from '@angular/core';
//clases
import { ListaItem, Lista } from '../../app/clases/index';
//alerts
import { AlertController, NavController } from 'ionic-angular';
//servicio
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
    selector: 'app-agregar',
    templateUrl: 'agregar.component.html'
})

export class AgregarComponent {

    nombreLista:string = "";
    nombreItem:string = "";
    items: ListaItem[] = [];

    constructor(private alertCtrl: AlertController,
                private navCtrl: NavController,
                private _listaDeseosService: ListaDeseosService){}

    agregar(){
        
        if( this.nombreItem.length == 0 ){
            return;
        }
        let item = new ListaItem();
        item.nombre = this.nombreItem;
        this.items.push(item);
        this.nombreItem = "";
    }

    borrar( dato:number ){
        this.items.splice(dato,1);
    }
    guardarLista(){
        //realizamos la validacion del campo nombre de la lista el cual debe ser obligatorio
        if(this.nombreLista.length == 0){

            //creamos un alert par mostrar mensaje al usuario
            const alert = this.alertCtrl.create({
                title: 'Nombre de la lista!',
                subTitle: 'El nombre de la lista el necesario!',
                buttons: ['OK']
            });

            alert.present();
            return;
        }
        //creamos un objeto lista el cual instancia la clase Lista
        let lista =  new Lista( this.nombreLista );
        //guardamos los valores de los itemas que ha guardado el usuario
        lista.items = this.items;
        //enviamos los datos al servicio
        this._listaDeseosService.agregarLista( lista );
        this.navCtrl.pop();
    }
}