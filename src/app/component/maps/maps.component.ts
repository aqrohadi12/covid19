import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import OSM from 'ol/source/OSM.js';
import Overlay from 'ol/Overlay';
import {fromLonLat, transform, toLonLat} from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import Icon from 'ol/style/Icon';
import Style from 'ol/style/Style';
import VectorLayer from 'ol/layer/Vector';
import SourceVector from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import { AppService } from '../../app.service';
import swal from 'sweetalert2';
import { OtherService } from '../../other.service';
import Stroke from 'ol/style/Stroke';
import {toStringHDMS} from 'ol/coordinate';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import TileJSON from 'ol/source/TileJSON';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { PopupService } from '@ng-bootstrap/ng-bootstrap/util/popup';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  constructor(
    private appService: AppService,
    private other: OtherService
  ) { }

world: any;
map;
overlay: Overlay;
vectorLayer: VectorLayer;
vectorSource: SourceVector;
features: any;

 // getData() {
  //   return this.appService.getWorld().subscribe(
	// 		data => {
  //       this.world = data
  //   })
  // }

  ngOnInit(){ 
    // var content = document.getElementById('popup-content');
    // var container = document.getElementById('popup');
    // var closer = document.getElementById('popup-closer');
    var Marker = 
    [
        {Lat: 41.28247976112171, Long_: 28.000645778308126},
        {Lat: 27.683528, Long_: 24.164073},
        {Lat: 30.5928, Long_: 114.3055},
        {Lat: -0.789, Long_: 113.921} 	
    ];

    // var overlay = new Overlay({
    //   element: container,
    //   autoPan: true,
    //   autoPanAnimation: {
    //     duration: 250
    //   }
    // });

    // closer.onclick = function() {
    //   overlay.setPosition(undefined);
    //   closer.blur();
    //   return false;
    // };
    this.vectorSource = new SourceVector();
    this.vectorLayer = new VectorLayer({
        source: this.vectorSource,
        renderBuffer: 200
    });
    this.map = new Map({
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        this.vectorLayer
      ],
      target: 'map',
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    });
    let features = [];

    // Marker dengan data statis
    // for(let i = 0; i < Marker.length; i++) {
    //   let item = Marker[i];
    //         const longitude = item.Long_;
    //         const latitude = item.Lat;
    //         const coordinate = transform([longitude, latitude], 'EPSG:4326', 'EPSG:3857');
    //         console.log(longitude, latitude)
    //         const iconFeature = new Feature({
    //           type: 'click',
    //           geometry: new Point(coordinate),
    //         });
        
    //         let iconStyle = new Style({
    //             image: new Icon(({
    //                 anchor: [0.5, 1],
    //                 src: "https://cdn.mapmarker.io/api/v1/fa/stack?size=50&color=DC4C3F&icon=fa-microchip&hoffset=1"
    //             }))
    //         });
        
    //         iconFeature.setStyle(iconStyle);
    //         features.push(iconFeature);
    //       }


      this.appService.getWorld().subscribe(
        data => {
          this.world = data;
          for (let i = 0; i < this.world.length; i++) {
            const item = this.world[i];
            const longitude = item.attributes.Long_;
            const latitude = item.attributes.Lat;
            const coordinate = transform([longitude, latitude], 'EPSG:4326', 'EPSG:3857');
            const iconFeature = new Feature({
                geometry: new Point(coordinate),
                id: i
            });
        
            let iconStyle = new Style({
                image: new Icon(({
                    anchor: [0.5, 1],
                    src: "https://cdn.mapmarker.io/api/v1/fa/stack?size=50&color=DC4C3F&icon=fa-microchip&hoffset=1"
                }))
            });
            iconFeature.setStyle(iconStyle);
            features.push(iconFeature);
          }
          console.log(features);
          this.vectorSource.addFeatures(features);
        })
    }

    popUp(): void {
      const container = document.getElementById('popup');
      const content = document.getElementById('popup-content');
      const closer = document.getElementById('popup-closer');

      this.overlay = new Overlay({
      element: document.getElementById('popup-container'),
      positioning: 'bottom-center',
      offest: [0, -10]
      });

      this.map.on('click', (event) => {
        this.map.forEachFeatureAtPixel(event.pixel, (feature, layer) => {
          console.log(feature);
          this.overlay.setPosition();
          this.appService.getWorld();
        });
      });
       this.map.addOverlay(this.overlay);
  
this.appService.getWorld().subscribe(
data => {
this.world = data;
const features = this.map.getFeaturesAtPixel();
 if (features) {
    const item = this.world;
    const coords = features[0].getGeometry().getCoordinates();
    const attributes = '(' +item.attributes.OBJECTID + ')' + item.attributes.Country_Region ;
    const popupContent = 
    `<div style='background-color: ` + item.class +`;color: #fff;padding: 3px 10px;'>`+
    `<div class='pull-right'><span class='fa fa-close' id='closeBtn'></span></div>` +
    `<h6>` + item.attributes.Country_Region + `/` + item.attributes.Long_ + `</h6>` +
    `</div>` +
    `<table class='pop-up-table'>
         <tr>
             <td style="padding:7px"><b>ID</b></td>
             <td style="padding:7px"> : </td>
             <td style="padding:7px">`+item.attributes.OBJECTID+`</td>
         <tr>
         <tr>
             <td style="padding:7px"><b>Country</b></td>
             <td style="padding:7px"> : </td>
             <td style="padding:7px">`+item.attributes.Country_Region+`</td>
         </tr>
         `;
         this.overlay.getElement().innerHTML = popupContent;
         this.overlay.setPosition(coords);
         const closeBtn = document.getElementById('closeBtn');
         closeBtn.addEventListener('click', (e: Event) => this.closePopup());
         }
      })
}
      closePopup() {
      this.overlay.setPosition(undefined);
      return false;
      }
    }
