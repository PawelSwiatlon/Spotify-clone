import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {
  spotifyService;
  playlistArray: Observable<any>;

  constructor(SpotifyService: SpotifyService) {
    this.spotifyService = SpotifyService;




  }

  ngOnInit(): void {
    this.playlistArray = this.spotifyService.getUserPlaylists();
  }


}
