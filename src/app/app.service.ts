import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

const API_URL = environment.api_URL;
const API_URL2 = environment.api_URL2;
const API_19 = environment.api_19;
const API_covid = environment.api_covid;
const API_id = environment.api_id;
const API_NEWS = environment.api_NEWS;

@Injectable({
  providedIn: 'root'
})
export class AppService { 
 
  constructor(private _http: HttpClient) { }

  public getPlayers() {
    return this._http.get(API_URL2 + '/employees');
  }

  public getUser() {
    return this._http.get(API_URL + '/users');
  }

  public getProvinsi() {
    return this._http.get(API_covid);
  }

  public getConfirmed() {
    return this._http.get(API_id + '/confirmed');
  }

  public getRecovered() {
    return this._http.get(API_id + '/recovered');
  }

  public getDeaths() {
    return this._http.get(API_id + '/deaths');
  }

  public getWorld() {
    return this._http.get(API_19);
  }

  public getNegara() {
    return this._http.get(API_19 + '/indonesia/');
  }

  public getNews() {
    return this._http.get(API_NEWS);
  }
}