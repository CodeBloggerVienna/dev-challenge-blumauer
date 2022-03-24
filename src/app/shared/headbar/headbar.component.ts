import { Component, OnInit } from '@angular/core';
import { FavouriteGiphyService } from 'src/app/core/services/favourite-giphy.service';
import { GiphyService } from 'src/app/core/services/giphy.service';

@Component({
  selector: 'app-headbar',
  templateUrl: './headbar.component.html',
  styleUrls: ['./headbar.component.css']
})
export class HeadbarComponent implements OnInit {

  constructor(private dataService : GiphyService,private favService: FavouriteGiphyService) { }

  favGifs : any[] = [];
  
  ngOnInit(): void {
    this.favService.favGifs.subscribe(
      res => {
        this.favGifs = res;
      }
    )
  }

  loadGifs(input:string){
    
    if(input !== ""){
      console.log(input);
      this.dataService.searchGifs(input);
    }else{
      this.dataService.searchGifs("search me!");
    }

  }

  loadFavs(){
    this.dataService.changeGifs(this.favGifs);
  }


}
