import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {PictureServiceService} from "../picture-service.service";

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {

  constructor(private router: Router, private pictureService: PictureServiceService) {

  }


  randomPicture() {
    console.log("button pressed");
    // picks a random number limited by the length array
    const index = parseInt('' + Math.random() * this.pictureService.getPictures().length);
    console.log(index);
    this.router.navigate(['gallery', index]);

  }
}
