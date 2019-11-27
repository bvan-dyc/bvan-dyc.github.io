import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';

@Component({
  selector: 'app-unity-pool',
  templateUrl: './unity-pool.component.html',
  styleUrls: ['./unity-pool.component.scss']
})
export class UnityPoolComponent implements OnInit {
  galleryId = 'unitypoolLightbox';
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
    srcUrl: 'assets/images/unitypool/flappy_big.png',
    previewUrl: 'assets/images/unitypool/flappy.jpg',
  },
  {
    srcUrl: 'assets/images/unitypool/puzzle_big.png',
    previewUrl: 'assets/images/unitypool/puzzle.jpg',
  },
  {
    srcUrl: 'assets/images/unitypool/Warcraft_big.png',
    previewUrl: 'assets/images/unitypool/Warcraft.jpg',
  },
  {
    srcUrl: 'assets/images/unitypool/towerdefense_big.png',
    previewUrl: 'assets/images/unitypool/towerdefense.jpg',
  },
  {
    srcUrl: 'assets/images/unitypool/sanic_big.png',
    previewUrl: 'assets/images/unitypool/sonic.jpg',
  },
  {
    srcUrl: 'assets/images/unitypool/RUSH00_big.png',
    previewUrl: 'assets/images/unitypool/RUSH00.jpg',
  },
  {
    srcUrl: 'assets/images/unitypool/golf_big.png',
    previewUrl: 'assets/images/unitypool/golf.jpg',
  },
  {
    srcUrl: 'assets/images/unitypool/stealth_big.png',
    previewUrl: 'assets/images/unitypool/stealth.jpg',
  },
  {
    srcUrl: 'assets/images/unitypool/tank.png',
    previewUrl: 'assets/images/unitypool/tank_small.png',
  },
  {
    srcUrl: 'assets/images/unitypool/arpg.png',
    previewUrl: 'assets/images/unitypool/arpg_small.png',
  },
  {
    srcUrl: 'assets/images/unitypool/rt.png',
    previewUrl: 'assets/images/unitypool/rt_small.png',
  }
];
