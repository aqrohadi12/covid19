import { Routes } from '@angular/router';

import { NgbdpregressbarBasicComponent } from './progressbar/progressbar.component';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { NgbdAccordionBasicComponent } from './accordion/accordion.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';
import { NgbdCarouselBasicComponent } from './carousel/carousel.component';
import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdModalBasicComponent } from './modal/modal.component';
import { NgbdPopTooltipComponent } from './popover-tooltip/popover-tooltip.component';
import { NgbdratingBasicComponent } from './rating/rating.component';
import { TabelComponent } from './tabel/tabel.component';
import { NgbdtabsBasicComponent } from './tabs/tabs.component';
import { NgbdtimepickerBasicComponent } from './timepicker/timepicker.component';
import { CardsComponent } from './card/card.component';
import { ToastComponent } from './toast/toast.component';
import { CovidComponent } from './covid/covid.component';
import { Cov19Component } from './cov19/cov19.component';
import { NewsComponent } from './news/news.component';
import { MapsComponent } from './maps/maps.component';

export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'progressbar',
				component: NgbdpregressbarBasicComponent,
				data: {
					title: 'Progressbar'
				}
			},
			{
				path: 'maps',
				component: MapsComponent,
				data: {
					title: 'Maps-World'
				}
			},
			{
				path: 'covid',
				component: CovidComponent,
				data: {
					title: 'Covid19-Nusantara'
				}
			},
			{
				path: 'cov19',
				component: Cov19Component,
				data: {
					title: 'Covid19-World'
				}
			},
			{
				path: 'news',
				component: NewsComponent,
				data: {
					title: 'News'
				}
			},
			{
				path: 'card',
				component: CardsComponent,
				data: {
					title: 'Cards'
				}
			},
			{
				path: 'pagination',
				component: NgbdpaginationBasicComponent,
				data: {
					title: 'Pagination'
				}
			},
			{
				path: 'accordion',
				component: NgbdAccordionBasicComponent,
				data: {
					title: 'Accordion'
				}
			},
			{
				path: 'alert',
				component: NgbdAlertBasicComponent,
				data: {
					title: 'Alert'
				}
			},
			{
				path: 'carousel',
				component: NgbdCarouselBasicComponent,
				data: {
				   title: 'Beranda' 
				// title: 'Carousel' // 
				}
			},
			{
				path: 'dropdown',
				component: NgbdDropdownBasicComponent,
				data: {
					title: 'Dropdown'
				}
			},
			{
				path: 'modal',
				component: NgbdModalBasicComponent,
				data: {
					title: 'Modal'
				}
			},
			{
				path: 'poptool',
				component: NgbdPopTooltipComponent,
				data: {
					title: 'Popover & Tooltip'
				}
			},
			{
				path: 'rating',
				component: NgbdratingBasicComponent,
				data: {
					title: 'Rating'
				}
			},
			{
				path: 'tabel',
				component: TabelComponent,
				data: {
					title: 'Tabel'
				}
			},
			{
				path: 'tabs',
				component: NgbdtabsBasicComponent,
				data: {
					title: 'Tabs'
				}
			},
			{
				path: 'timepicker',
				component: NgbdtimepickerBasicComponent,
				data: {
					title: 'Timepicker'
				}
			},
			{
				path: 'toast',
				component: ToastComponent,
				data: {
					title: 'Toast',
				}
			}
		]
	}
];
