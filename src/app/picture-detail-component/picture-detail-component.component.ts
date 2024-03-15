import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PictureServiceService} from "../picture-service.service";
import {Picture} from "../picture";

@Component({
  selector: 'app-picture-detail-component',
  standalone: true,
  imports: [],
  templateUrl: './picture-detail-component.component.html',
  styleUrl: './picture-detail-component.component.css'
})
export class PictureDetailComponentComponent implements OnInit {

  picture!: Picture;

  constructor(private route: ActivatedRoute, private pictureService: PictureServiceService) {

  }


  // runs on init //
  ngOnInit(): void {
    const index: number = this.route.snapshot.params['index'];
    this.picture = this.pictureService.getPictures()[index];

  }


}
