import { Component } from '@angular/core'; 

//servicio 
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

import { NavController } from 'ionic-angular';
import { DetalleComponent  } from '../detalle/detalle.component';

@Component({
    selector: 'app-terminados',
    templateUrl: 'terminados.component.html',
})

export class TerminadosComponent {

    constructor(private _listaDeseosService: ListaDeseosService,
                private navCtrl: NavController){}


    verdetalle(lista, idx ){
        this.navCtrl.push(DetalleComponent, { lista,idx });
    }
    
}