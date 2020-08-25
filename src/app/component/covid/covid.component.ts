import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import swal from 'sweetalert2';
import { OtherService } from '../../other.service';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit{
 public provinsi : any = [];
  confirmed;
  recovered;
  deaths;
  isDesc: boolean = false;
  public sort = 'fid,asc';

  page = 1;

//inject HttpClient into your component or service.
constructor (
  private appService: AppService,
  private other: OtherService,
  ) {}

ngOnInit() {
 this.getList();
 this.getConfirmed();
 this.getRecovered();
 this.getDeaths();
 this.other.loadingPage();
  } 

  getList() {
		return this.appService.getProvinsi().subscribe(
			(data: any) => {
        this.provinsi = data[''];
        swal.close();
			},
			error => {
				swal.close();         
				this.other.alertErrorService(error['message']);
			}
		);
  }

  getConfirmed() {
		return this.appService.getConfirmed().subscribe(
			(data: any) => {
        this.confirmed = data
        swal.close();
			});
  }

  getRecovered() {
		return this.appService.getRecovered().subscribe(
			(data: any) => {
        this.recovered = data
        swal.close();
			});
  }

  getDeaths() {
		return this.appService.getDeaths().subscribe(
			(data: any) => {
        this.deaths = data
        swal.close();
			});
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

    this.provinsi.sort(function (a, b) {
      if (property == 'fid') {
        if (a['fid'] < b['fid']) {
            return -1 * direction; 
        }
        else if (a['fid'] > b['fid']) {
            return 1 * direction;
        }
        else {
            return 0;
        }
      } else if (property == 'provinsi') {
        if (a['provinsi'] < b['provinsi']) {
            return -1 * direction;
        }
        else if (a['provinsi'] > b['provinsi']) {
            return 1 * direction;
        }
        else {
            return 0;
        }
      } else if (property == 'kasusPosi') {
        if (a['kasusPosi'] < b['kasusPosi']) {
            return -1 * direction;
        }
        else if (a['kasusPosi'] > b['kasusPosi']) {
            return 1 * direction;
        }
        else {
            return 0;
        }
      } else if (property == 'kasusSemb') {
        if (a['kasusSemb'] < b['kasusSemb']) {
            return -1 * direction;
        }
        else if (a['kasusSemb'] > b['kasusSemb']) {
            return 1 * direction;
        }
        else {
            return 0;
        }
      } else if (property == 'kasusMeni') {
        if (a['kasusMeni'] < b['kasusMeni']) {
            return -1 * direction;
        }
        else if (a['kasusMeni'] > b['kasusMeni']) {
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
}