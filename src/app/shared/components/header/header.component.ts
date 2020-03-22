import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	title = 'Waldemar Popp';

	constructor(private router: Router) {}

    ngOnInit() { }
    
    redirect(route: string) {
        this.router.navigate(['/' + route]);
    }
}
