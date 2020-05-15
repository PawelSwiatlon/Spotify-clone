import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../spotify.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(SpotifyService: SpotifyService, router: Router) {
    if(JSON.parse(localStorage.getItem('accessToken'))){
      SpotifyService.setAccessToken(JSON.parse(localStorage.getItem('accessToken')));
    }
    else{
      router.navigate(['/login']);
    }


   }

  ngOnInit(): void {

  }

}
