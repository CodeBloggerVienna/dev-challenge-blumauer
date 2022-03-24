import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GiphyService } from 'src/app/core/services/giphy.service';

@Component({
  selector: 'app-gif-output',
  templateUrl: './gif-output.component.html',
  styleUrls: ['./gif-output.component.css']
})
export class GifOutputComponent implements OnInit, OnDestroy {

  gifs: any[] = [];
  subscription: Subscription | undefined;

  constructor(private dataService : GiphyService) { }

  ngOnInit(): void {
    this.subscription = this.dataService.getGifs()
    .subscribe((res: any)=>{
      this.gifs = res;
    }) 
  }
  
  //
  ngOnDestroy(){
    if(this.subscription)
    this.subscription.unsubscribe();
  }

}
