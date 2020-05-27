import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../spotify.service';
import { PlayerService } from '../player.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  playerService: PlayerService;

  constructor(SpotifyService: SpotifyService, PlayerService: PlayerService, router: Router) {
    const expirationDate: Date | null = new Date(JSON.parse(localStorage.getItem('accessExpiration')));
    if(expirationDate != null && expirationDate.getTime() > new Date().getTime()){
      SpotifyService.setAccessToken();
      SpotifyService.refreshToken(expirationDate.getTime() - new Date().getTime());

    }
    else if(JSON.parse(localStorage.getItem('accessToken'))){
      SpotifyService.refreshToken(0, true);
    }
    else{
      router.navigate(['/login']);
    }
    this.playerService = PlayerService;


   }

  ngOnInit(): void {
  }

}
