import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';

@Component({
  selector: 'app-game-jams',
  templateUrl: './game-jams.component.html',
  styleUrls: ['./game-jams.component.scss']
})
export class GameJamsComponent implements OnInit {
  galleryId = 'gamejamLightbox';
  items: GalleryItem[];

  constructor(public gallery: Gallery, private lightbox: Lightbox) {
  }
  ngOnInit() {
    this.items = data.map(item =>
      new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );
    const galleryRef = this.gallery.ref(this.galleryId);
    galleryRef.load(this.items);
  }
}

const data = [
  {
    srcUrl: 'assets/images/gamejams/medical1.png',
    previewUrl: 'assets/images/gamejams/medical1_small.png',
  },
  {
    srcUrl: 'assets/images/gamejams/medical2.png',
    previewUrl: 'assets/images/gamejams/medical2_small.png',
  },
  {
    srcUrl: 'assets/images/gamejams/medical3.png',
    previewUrl: 'assets/images/gamejams/medical3_small.png',
  },
  {
    srcUrl: 'assets/images/gamejams/medical4.png',
    previewUrl: 'assets/images/gamejams/medical4_small.png',
  },
  {
    srcUrl: 'assets/images/gamejams/trpg.png',
    previewUrl: 'assets/images/gamejams/trpg_small.png',
  }
]
