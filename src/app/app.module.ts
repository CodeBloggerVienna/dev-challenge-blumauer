import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadbarComponent } from './shared/headbar/headbar.component';
import { GifOutputComponent } from './pages/gif-output/gif-output.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadbarComponent,
    GifOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
