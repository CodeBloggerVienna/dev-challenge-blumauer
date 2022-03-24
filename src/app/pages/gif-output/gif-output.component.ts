import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FavouriteGiphyService } from 'src/app/core/services/favourite-giphy.service';
import { GiphyService } from 'src/app/core/services/giphy.service';

@Component({
  selector: 'app-gif-output',
  templateUrl: './gif-output.component.html',
  styleUrls: ['./gif-output.component.css']
})
export class GifOutputComponent implements OnInit, OnDestroy {

  gifs: any[] = [];
  subscription: Subscription[] = [];

  favGifs: any[] = [];

  constructor(private dataService : GiphyService, private favGifService: FavouriteGiphyService) { }

  ngOnInit(): void {
    
    this.subscription.push(
      this.dataService.getGifs()
    .subscribe((res: any)=>{
      this.gifs = res;
    }) 
    )

    this.subscription.push(
      this.favGifService.favGifs
      .subscribe(
        res =>
        {
          this.favGifs= res;
        }
      )
    )
  }

  markAsFav(gif: any){
    
    if(this.favGifs.filter(item => item.id == gif.id).length > 0){
      this.favGifs = this.favGifs.filter(item => item.id != gif.id);
    }else
    {
      this.favGifs.push(gif);
    }
    this.favGifService.changeListOfFav(this.favGifs);
  }

  check(gif:any){
    if(this.favGifs.filter(item => item.id == gif.id).length > 0){
      return true;
    }else{
      return false;
    }
  }
  
  //
  ngOnDestroy(){
    for (var sub of this.subscription) {
      sub.unsubscribe();
    }
  }

}
