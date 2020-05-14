import { Injectable } from '@angular/core';
import spotifyWebApi from 'spotify-web-api-node';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'




@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  http: HttpClient;

  spotifyApi: spotifyWebApi;
  constructor(http: HttpClient) {
      this.spotifyApi =  new spotifyWebApi();
      this.http = http;
    }

   setAccessToken(accessToken){
     this.spotifyApi.setAccessToken(accessToken);
     //localStorage.setItem('spotifyApi', JSON.stringify(accessToken));
   }

  getUserPlaylists(){
    return from(this.spotifyApi.getUserPlaylists( {limit: '50'}))
      .pipe(map((res: any) => res.body.items));
  }
  refreshToken(){
    return this.http.get('api');
  }


}

