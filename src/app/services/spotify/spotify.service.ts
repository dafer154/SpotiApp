import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

//Libreria de observable
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

//el get las mete aqui
  artistas:any[] = [];

  urlBusqueda:string = "https://api.spotify.com/v1/search";
  urlArtista:string = "https://api.spotify.com/v1/artists";
  token:string = "BQDANrv_wYl8c1a1I2KY5_lA-9ee8aPwh5-xQuhRdBRgJaOsN2JcaMI3RvFok1OHXDOx-f_TUfDM0ccB_r86Vw"

  constructor(private http:Http) { }

getArtistas(termino:string){

    //Autenticacion de spotify
    let headers = new Headers();
    headers.append( 'authorization', `Bearer ${this.token}`);

    //peticion http
    let query = `?q=${ termino }&type=artist`;
    let url = this.urlBusqueda + query;

    console.log(url);

    //Peticion URL => Observable o promesa
    return this.http.get( url, {headers} ).map(res =>{
                //console.log(res.json().artists.items);
                this.artistas = res.json().artists.items;
                console.log(this.artistas);
                return res.json().artists.items;
              } )
}

getArtista(id:string){

    //Autenticacion de spotify
    let headers = new Headers();
    headers.append( 'authorization', `Bearer ${this.token}`);

    //peticion http
    let query = `/${ id }`;
    let url = this.urlArtista + query;

    console.log(url);

    //Peticion URL => Observable o promesa
    return this.http.get( url, {headers} ).map(res =>{
                console.log(res.json());
                //this.artistas = res.json().artists.items;
                //console.log(this.artistas);
                return res.json();
              } )
}

getTop( id:string ){

   let headers = new Headers();
   headers.append( 'authorization', `Bearer ${this.token}` );

   let query = `/${ id }/top-tracks?country=US`;
   let url = this.urlArtista + query;

   return this.http.get( url, { headers } )
           .map(res =>{
             console.log(res.json().tracks);
             return res.json().tracks;
           });
 }


}
