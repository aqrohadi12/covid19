import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import swal from 'sweetalert2';
import { OtherService } from '../../other.service';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cov19',
  templateUrl: './cov19.component.html',
  styleUrls: ['./cov19.component.css']
})
export class Cov19Component implements OnInit {
world;
page2 = 1;
isDesc: boolean = false; 
public sort = 'OBJECTID,asc';
todayDate : Date = new Date();
page = 4;
filter: any;
p: 2;

  //inject HttpClient into your component or service.
constructor (
  private appService: AppService,
  private other: OtherService,
  ) { }

 
ngOnInit() {
 this.getData();
 this.other.loadingPage();
  } 

  //Sorting data by header table clicked
	sortData(property) {
    this.isDesc = !this.isDesc; //change the direction
    let direction = this.isDesc ? 1 : -1;

    if (this.isDesc == true) {
      this.sort = ''+property+',asc';
    } else if (this.isDesc == false) {  
      this.sort = ''+property+',desc';
    }

    this.world.sort(function (a, b) {
      if (property == 'attributes.OBJECTID') {
        if (a['attributes']['OBJECTID'] < b['attributes']['OBJECTID']) {
            return -1 * direction; 
        }
        else if (a['attributes']['OBJECTID'] > b['attributes']['OBJECTID']) {
            return 1 * direction;
        }
        else {
            return 0;
        }
      } else if (property == 'attributes.Country_Region') {
        if (a['attributes']['Country_Region'] < b['attributes']['Country_Region']) {
            return -1 * direction;
        }
        else if (a['attributes']['Country_Region'] > b['attributes']['Country_Region']) {
            return 1 * direction;
        }
        else {
            return 0;
        }
      } else if (property == 'attributes.Confirmed') {
        if (a['attributes']['Confirmed'] < b['attributes']['Confirmed']) {
            return -1 * direction;
        }
        else if (a['attributes']['Confirmed'] > b['attributes']['Confirmed']) {
            return 1 * direction;
        }
        else {
            return 0;
        }
      } else if (property == 'attributes.Recovered') {
        if (a['attributes']['Recovered'] < b['attributes']['Recovered']) {
            return -1 * direction;
        }
        else if (a['attributes']['Recovered'] > b['attributes']['Recovered']) {
            return 1 * direction;
        }
        else {
            return 0;
        }
      } else if (property == 'attributes.Deaths') {
        if (a['attributes']['Deaths'] < b['attributes']['Deaths']) {
            return -1 * direction;
        }
        else if (a['attributes']['Deaths'] > b['attributes']['Deaths']) {
            return 1 * direction;
        }
        else {
            return 0;
        }
      } else if (property == 'attributes.Active') {
        if (a['attributes']['Active'] < b['attributes']['Active']) {
            return -1 * direction;
        }
        else if (a['attributes']['Active'] > b['attributes']['Active']) {
            return 1 * direction;
        }
        else {
            return 0;
        }
      } else {
        if (a[property] < b[property]) {
            return -1 * direction;
        }
        else if (a[property] > b[property]) {
            return 1 * direction;
        }
        else {
            return 0;
        }
      }
    });
}

  getData() {
		return this.appService.getWorld().subscribe(
			data => {
        this.world = data
        swal.close();
			},
			error => {
				swal.close();        
				this.other.alertErrorService(error['message']);
			}
		);
	}
} 