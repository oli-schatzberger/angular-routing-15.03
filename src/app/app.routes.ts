import {Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {HomeComponentComponent} from "./home-component/home-component.component";
import {GalleryComponentComponent} from "./gallery-component/gallery-component.component";
import {PictureDetailComponentComponent} from "./picture-detail-component/picture-detail-component.component";

export const routes: Routes = [
  {path: '', component: HomeComponentComponent},
  {path: 'gallery', component: GalleryComponentComponent},
  {path: 'gallery/:index', component: PictureDetailComponentComponent}
];
