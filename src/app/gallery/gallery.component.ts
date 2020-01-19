/*
 The MIT License (MIT)

 Copyright (c) 2017-2018 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */

import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import {
  Description,
  DescriptionStrategy,
  DotsConfig,
  GalleryService,
  Image,
  PlainGalleryConfig,
  PlainGalleryStrategy,
  GridLayout
} from '@ks89/angular-modal-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  imageIndex = 1;
  galleryId = 1;
  isPlaying = true;

  images: Image[] = [
    new Image(
      0,
      { // modal
        img: 'http://www.waldemar-popp.de/img/galerie/Sonnenblume.jpg',
        description: 'Sonnenblume'
      }
    ),
    new Image(
      1,
      { // modal
        img: 'http://www.waldemar-popp.de/img/galerie/Akt-mit-Pferd.jpg',
        description: 'Akt mit Pferd'
      }
    ),
    new Image(
      2,
      { // modal
        img: 'http://www.waldemar-popp.de/img/galerie/Ein-Rappe.jpg',
        description: 'Ein Rappe'
      }
    ),
    new Image(
      3,
      { // modal
        img: 'http://www.waldemar-popp.de/img/galerie/Assamstadt-im-Winter.jpg',
        description: 'Assamstadt im Winter',
      }
    ),
    new Image(
      4,
      { // modal
        img: 'http://www.waldemar-popp.de/img/galerie/Vor-dem-Sturm.jpg',
        description: 'Vor dem Sturm'
      }
    )
  ];

  dotsConfig: DotsConfig = {
    visible: false
  };

  customDescriptionHideIfEmpty: Description = {
    strategy: DescriptionStrategy.HIDE_IF_EMPTY,
    imageText: 'Look this image ',
    numberSeparator: ' of ',
    beforeTextDescription: ' => '
  };

  hidePlainGallery: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.GRID,
    layout: new GridLayout({ width: '0', height: '0' }, { length: 1, wrap: true })
  };

  private count = 0;

  constructor(private galleryService: GalleryService, private sanitizer: DomSanitizer) {}

  openModalViaService(id: number | undefined, index: number) {
    console.log('opening gallery with index ' + index);
    this.galleryService.openGallery(id, index);
  }
}
