import { TestBed } from '@angular/core/testing';

import { FavouriteGiphyService } from './favourite-giphy.service';

describe('FavouriteGiphyService', () => {
  let service: FavouriteGiphyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouriteGiphyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
