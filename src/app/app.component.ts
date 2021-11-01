import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { Artist } from './models/Artist';
import { MusicServiceService } from './service/music-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'My Music Collection';
    version = 1.0
    artists: Artist[] = [];
    selectedArtist = "";
    

    constructor(private service: MusicServiceService, private route2: Router){

    }

    displayVersion() 
    { 
      alert("I am an alert box!");
    }

    ngOnInit()
    {
      
    }


    public displayArtistList()
    {
      console.log("In app component");
      this.route2.navigate(['list-artists'], { queryParams: { data: new Date()} }); 
      
    }

}
