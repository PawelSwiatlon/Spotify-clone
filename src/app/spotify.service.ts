import { Injectable } from '@angular/core';
import spotifyWebApi from 'spotify-web-api-node';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  constructor() {}
   spotifyApi = new spotifyWebApi();

   setAccessToken(accessToken){
     this.spotifyApi.setAccessToken(accessToken);
   }
/*
  getUserPlaylists(){
     return this.spotifyApi.getUserPlaylists( {limit: '50'})
        .then((response: any) =>{
              return of(response.body.items);
            }
        );
   }
*/
  getUserPlaylists(){
    return from(this.spotifyApi.getUserPlaylists( {limit: '50'}))
      .pipe(map((res: any) => res.body.items));
  }


}

