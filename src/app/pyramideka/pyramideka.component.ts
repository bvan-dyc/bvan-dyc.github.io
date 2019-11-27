import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';

@Component({
  selector: 'app-pyramideka',
  templateUrl: './pyramideka.component.html',
  styleUrls: ['./pyramideka.component.scss']
})
export class PyramidekaComponent implements OnInit {
  galleryId = 'pyramidekaLightbox';
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
    srcUrl: 'assets/images/pyramideka/pyr_action.png',
    previewUrl: 'assets/images/pyramideka/pyr_action_small.png',
  },
  {
    srcUrl: 'assets/images/pyramideka/slash.png',
    previewUrl: 'assets/images/pyramideka/slash_small.png',
  },
  {
    srcUrl: 'assets/images/pyramideka/masked_run1.png',
    previewUrl: 'assets/images/pyramideka/masked_run1_small.png',
  },
  {
    srcUrl: 'assets/images/pyramideka/tomb_idle.png',
    previewUrl: 'assets/images/pyramideka/tomb_idle_small.png',
  },
  {
    srcUrl: 'assets/images/pyramideka/masked.png',
    previewUrl: 'assets/images/pyramideka/masked_small.png',
  },
  {
    srcUrl: 'assets/images/pyramideka/blaisette_sheetA.png',
    previewUrl: 'assets/images/pyramideka/blaisette_sheetA_small.png',
  },
];
