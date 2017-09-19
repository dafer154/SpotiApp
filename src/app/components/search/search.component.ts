import { Component, OnInit } from '@angular/core';
import {SpotifyService } from '../../services/spotify/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  constructor( private _spotifyService: SpotifyService) { }

  ngOnInit() {

    //llama al observable
  //this._spotifyService.getArtistas("metallica").subscribe();
  
    this._spotifyService.getArtistas("metallica");
  }

}
