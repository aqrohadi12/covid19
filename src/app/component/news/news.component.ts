import { Component} from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent{
news;
  constructor (
    private appService: AppService,
    ) {}
  
  ngOnInit() {
   this.getNew();
    } 

beforeChange($event: NgbPanelChangeEvent) {
		if ($event.panelId === 'preventchange-2') {
			$event.preventDefault();
		}

		if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
			$event.preventDefault();
		}
	}
  disabled = false;
  
  getNew(){
    return this.appService.getNews().subscribe(
      data => {
        this.news = data
        }
      );
  }

}