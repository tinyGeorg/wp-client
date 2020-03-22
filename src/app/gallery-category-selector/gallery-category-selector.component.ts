import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-gallery-category-selector',
	templateUrl: './gallery-category-selector.component.html',
	styleUrls: ['./gallery-category-selector.component.scss']
})
export class GalleryCategorySelectorComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit() {}

	goToGallery(id: number) {
		this.router.navigate(['/gallery'], { queryParams: { id: id } });
	}
}
