import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  gifs = new BehaviorSubject<any>([]);
  
  constructor(private http: HttpClient) { }

  searchGifs(input: string){
    return this.http.get(`${environment.baseUrl}/search?q=${input}&api_key=${environment.giphyApiKey}&limit=20`)
    .subscribe((res: any)=>{
        this.gifs.next(res.data);
    });
  }

  // Stellt die Gifs als Strem zur Verfügung
  getGifs(){
    return this.gifs.asObservable();
  }

  //wird aufgerufen um den Output der Gif-komponente abzuändern
  changeGifs(gifs:any[]){
    this.gifs.next(gifs);
  }

}
