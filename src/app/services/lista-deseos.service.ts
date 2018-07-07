import { Injectable } from '@angular/core';
import { Lista } from '../clases/listas';

@Injectable()

export class ListaDeseosService {

    listas:Lista[] = [];

    constructor(){
        this.cargarData();
        console.log('servicio inicializado');

    }

    //funcion encargada de guardar el arreglo listas en el LocalStorage
    actualizarData(){
        localStorage.setItem( "data", JSON.stringify(this.listas) );
    }

    //funcion encargada de cargar los datos del LocalStorage
    cargarData(){
        if(localStorage.getItem("data")){
            this.listas =  JSON.parse( localStorage.getItem("data") );
        }
    }

    agregarLista( lista:Lista ){

        this.listas.push(lista);
        this.actualizarData();

    }

    eliminarLista( idx:number ){

        this.listas.splice(idx,1);
        this.actualizarData();

    }


}