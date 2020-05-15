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

      //refresh access token every 55min
      this.refreshToken(3300000);

    }

   setAccessToken(accessToken){
     this.spotifyApi.setAccessToken(accessToken);
     localStorage.setItem('accessToken', JSON.stringify(accessToken));
   }

  getUserPlaylists(){
    return from(this.spotifyApi.getUserPlaylists( {limit: '50'}))
      .pipe(map((res: any) => res.body.items));
  }
  async refreshToken(ms: number, instantRefresh = false){
      if(!instantRefresh){
        await delay(ms);
      }
      console.log('refreshed');
      this.http.get('api').subscribe(
        (res: any) =>{
          this.spotifyApi.setAccessToken(res.token);
        }
      );
    this.refreshToken(ms);
  }



}


function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}

