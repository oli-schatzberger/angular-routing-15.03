import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {PictureServiceService} from "../picture-service.service";

@Component({
  selector: 'app-gallery-component',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './gallery-component.component.html',
  styleUrl: './gallery-component.component.css'
})
export class GalleryComponentComponent {

  constructor(public pictureService: PictureServiceService) {

  }

}
