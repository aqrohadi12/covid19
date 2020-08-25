import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { DashboardComponent } from './dashboard.component';
import { NgbdCarouselBasicComponent } from '../component/carousel/carousel.component';

const routes: Routes = [
	{
		path: '',
		data: {
			title: 'Beranda' /*component crousel*/
		},
		component: NgbdCarouselBasicComponent
	}
];
/* const routes: Routes = [
	{
		path: '',
		data: {
			title: 'Dashboard'
		},
		component: DashboardComponent
	}
]; */

@NgModule({
	imports: [FormsModule, CommonModule, RouterModule.forChild(routes), ChartsModule],
	declarations: [DashboardComponent]
})
export class DashboardModule {}
