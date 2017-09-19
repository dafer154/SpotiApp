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

    let headers = new Headers();
    headers.append( 'authorization', 'Bearer BQB78SqzbkLGzqzmbdMINDRAVOcRyxVBHH0BEruuE8jME7JJHwziNdYdMidrdOS7BFce0RgR-NRj_IxbtSs9hA');

    let query = `?q=${ termino }&type=artist`;
    let url = this.urlBusqueda + query;

    console.log(url);

    //Peticion URL => Observable o promesa
    return this.http.get( url ).map(res =>{
                console.log(res);
                //this.artistas = res.json().artists.items;
              } )
}

}
