import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

//Libreria de observable
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

//el get las mete aqui
  artistas:any[] = [];

  urlBusqueda:string = "https://api.spotify.com/v1/search";
  //urlArtista:string = "https://api.spotify.com/v1/artists";

  constructor(private http:Http) { }

getArtistas(termino:string){

    //Autenticacion de spotify
    let headers = new Headers();
    headers.append( 'authorization', 'Bearer BQDZgb3vyFmGwLcF2N8Uz4_SdMTFqsQV6tZALSd4X0uZM-UeCf316q9STssDS5Jo6iVcDnnYmYgcEBQtaQ3vTg');

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

}
