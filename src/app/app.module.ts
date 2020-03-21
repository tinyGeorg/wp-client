import { MaterialModule } from './material-module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';

// ********************** angular-modal-gallery *****************************
import 'hammerjs'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save hammerjs`)
import 'mousetrap'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save mousetrap`)
import { GalleryModule } from '@ks89/angular-modal-gallery'; // <----------------- angular-modal-gallery library import
// **************************************************************************

// ************************ optional font-awesome 5 ************************
// to install use both `npm i --save @fortawesome/fontawesome-svg-core` and `npm i --save @fortawesome/free-solid-svg-icons`
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
	faExternalLinkAlt,
	faPlus,
	faTimes,
	faDownload
} from '@fortawesome/free-solid-svg-icons';
library.add(faExternalLinkAlt, faPlus, faTimes, faDownload);

import { FlexLayoutModule } from '@angular/flex-layout';
import { GalleryCategorySelectorComponent } from './gallery-category-selector/gallery-category-selector.component';
import { SliderComponent } from './shared/components/slider/slider.component';
import { SliderItemDirective } from './shared/components/slider/slider-item.directive';
import { HeaderComponent } from './header/header.component';

@NgModule({
	declarations: [
		AppComponent,
		GalleryComponent,
		GalleryCategorySelectorComponent,
		SliderComponent,
		SliderItemDirective,
		HeaderComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		FlexLayoutModule,
		MaterialModule,
		GalleryModule.forRoot()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
