import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  constructor(private http: HttpClient) { }



  getGifs(){
    return this.http.get(`${environment.baseUrl}/trending?api_key=%${environment.giphyApiKey}&limit=25`);
  }

}
