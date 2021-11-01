import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../models/Album';
import { Artist } from '../models/Artist';
import { Track } from '../models/Track';
import { MusicServiceService } from '../service/music-service.service';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrls: ['./list-albums.component.css']
})
export class ListAlbumsComponent implements OnInit {

  @Input() artist: Artist = new Artist(-1, "The Beatles");
  albums: Album[] = [];
  tracks: Track[] = [];
  //selectedAlbum : Album = new Album(-1, "Rubber Soul", "The Beatles", "2nd Favorite", 1965, "../../assets/images/6.png", this.tracks);
  selectedAlbum : any;

  constructor(private service: MusicServiceService) {
      
  }

  ngOnInit(){
      this.albums = this.service.getAlbums(this.artist.Name);

  }

  public onSelectAlbum(album: Album) 
  { 
     this.selectedAlbum = album; 
  }

}
