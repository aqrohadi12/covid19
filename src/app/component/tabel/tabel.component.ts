import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-tabel',
  templateUrl: './tabel.component.html',
  styleUrls: ['./tabel.component.css'],

})
export class TabelComponent {
  players;
  user;

//inject HttpClient into your component or service.
constructor (private appService: AppService) {}
ngOnInit() {
  this.getUser();
  return this.appService.getPlayers().subscribe(
    data => {
      this.players = data
      console.log(this.players);
      }
    );
  } 
  getUser(){
    return this.appService.getUser().subscribe(
      data => {
        this.user = data
        }
      );
  }
}