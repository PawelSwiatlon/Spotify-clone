import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-login2',
  templateUrl: './login.component.html',
})
export class Login2Component implements OnInit {

  constructor(route: ActivatedRoute, SpotifyService: SpotifyService, router: Router) {
    const accessToken = route.snapshot.paramMap.get('accessToken');
    SpotifyService.setAccessToken(accessToken);
    router.navigate(['/home']);
   }

  ngOnInit(): void {

  }

}
