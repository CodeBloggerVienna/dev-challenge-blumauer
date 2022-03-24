import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavouriteGiphyService {

  private _favGifs : any[] = [];
  private _favouriteGifs = new BehaviorSubject<any[]>(this._favGifs);
  favGifs = this._favouriteGifs.asObservable();

  constructor() { }

  //ändert die "globale" Liste der Lieblingsgifs
  changeListOfFav(newList: any[]) {
    this._favouriteGifs.next(newList);
  }
}
