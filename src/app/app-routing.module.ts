import { GalleryCategorySelectorComponent } from './gallery-category-selector/gallery-category-selector.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'galleries',
    pathMatch: 'full'
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    pathMatch: 'full'
  },
  {
    path: 'galleries',
    component: GalleryCategorySelectorComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
