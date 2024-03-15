import {Injectable} from '@angular/core';
import {Picture} from "./picture";

@Injectable({
  providedIn: 'root'
})
export class PictureServiceService {

  constructor() {
  }

  private pictures: Picture [] = [
    {
      title: 'Brüssel', file: 'assets/img/Brüssel.jpg', uploaded: new Date(2023, 5, 13)
    },
    {
      title: 'London', file: 'assets/img/London.jpg', uploaded: new Date(2023, 2, 22)
    },
    {
      title: 'Norway', file: 'assets/img/Norway.jpg', uploaded: new Date(2023, 1, 18)
    },
    {
      title: 'Paris', file: 'assets/img/Paris.jpg', uploaded: new Date(2022, 2, 11)
    },
    {
      title: 'USA', file: 'assets/img/USA.jpg', uploaded: new Date(2021, 12, 1)
    },
  ]

  getPictures(): Picture [] {

    // references to the picture array //
    return this.pictures;
  }
}
