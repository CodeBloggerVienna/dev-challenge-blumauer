import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GifOutputComponent } from './pages/gif-output/gif-output.component';

const routes: Routes = [
  { path: '', redirectTo: '/gif-output', pathMatch: 'full' },
  { path: 'gif-output', component: GifOutputComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
