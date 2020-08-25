import { Component, ViewChild } from '@angular/core';
import { NgbCarouselConfig, NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-ngbd-buttons-radio',
	templateUrl: './carousel.component.html',
	providers: [NgbCarouselConfig]
})
export class NgbdCarouselBasicComponent {

	constructor() {
	}
}
