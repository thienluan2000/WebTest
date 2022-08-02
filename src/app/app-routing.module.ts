import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPageComponent } from './detail-page/detail-page.component';
import {ContentComponent} from './content/content.component';
import {GameonlineComponent} from './gameonline/gameonline.component'

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'detail', component: DetailPageComponent },
    { path: '', component: ContentComponent },
    { path: 'gameonline', component: GameonlineComponent }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
