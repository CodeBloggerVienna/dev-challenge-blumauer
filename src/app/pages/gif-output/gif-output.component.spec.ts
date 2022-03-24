import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifOutputComponent } from './gif-output.component';

describe('GifOutputComponent', () => {
  let component: GifOutputComponent;
  let fixture: ComponentFixture<GifOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GifOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
