import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../models/Album';
import { Track } from '../models/Track';

@Component({
  selector: 'app-display-album',
  templateUrl: './display-album.component.html',
  styleUrls: ['./display-album.component.css']
})
export class DisplayAlbumComponent implements OnInit {

  tracks:Track[] = [];
  @Input() album: Album = new Album(-1,"","","",2021,"", this.tracks);

  //selectedAlbum = "The Beatles";
  constructor() { }

  ngOnInit(): void {
    
    console.log("Hello")
    console.log("list of album tracks: " + this.album.Tracks)
  }
  
}
