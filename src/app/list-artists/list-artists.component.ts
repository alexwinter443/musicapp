import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Artist } from '../models/Artist';
import { MusicServiceService } from '../service/music-service.service';

@Component({
  selector: 'app-list-artists',
  templateUrl: './list-artists.component.html',
  styleUrls: ['./list-artists.component.css']
})
export class ListArtistsComponent implements OnInit {

  //selectedArtistartist: Artist = new Artist(-1, "The Beatles");
  artists: Artist[] = [];
  selectedArtist : any;

  constructor(private route: ActivatedRoute, private service: MusicServiceService) {} 

  name = "Alex boi";


  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log("Getting data.....");
      this.artists = this.service.getArtists();
      console.log("artists: " + this.artists);
      this.selectedArtist = null;
      console.log("selectedArtist: " + this.selectedArtist);
    });
  }


  public onSelectArtist(artist: Artist) 
  { 
     this.selectedArtist = artist; 
     console.log("we did something")
     console.log("here is the artist we selected: " + this.selectedArtist.name);
  }

}
