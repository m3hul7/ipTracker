import { AfterViewInit, Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as L from 'leaflet';
import { TrackerPresenterService } from '../tracker-presenter/tracker-presenter.service';

@Component({
  selector: 'app-tracker-presentation',
  templateUrl: './tracker-presentation.component.html',
  styleUrls: ['./tracker-presentation.component.scss']
})
export class TrackerPresentationComponent implements OnInit, AfterViewInit {

  private map: any;
  public ipForm: FormGroup;
  public ipInformation: any;
  private icon: any;

  @Input() public set ipInfo(data: any) {
    if(data) {
      L.marker([data.latitude, data.longitude], {icon: this.icon}).addTo(this.map);
      this.map.flyTo([data.latitude, data.longitude], 15);
      this.ipInformation = data;
    }
    
  }

  public get ipInfo() {
    return this.ipInformation;
  }

  @Output() public emitIpAddr: EventEmitter<any>;
  
  constructor(private _tps: TrackerPresenterService) { 
    this.ipForm = this._tps.buildForm();
    this.emitIpAddr = new EventEmitter();
  }

  ngOnInit(): void {
    this._tps.ipaddr$.subscribe((ip:any) => this.emitIpAddr.emit(ip))
  }

  ngAfterViewInit(): void {
    this.initMap();
    
  }

  public getAddr() {
    this._tps.getIP(this.ipForm.value.ip)
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });

    this.icon = L.icon({
      iconUrl: '../../../../assets/images/icon-location.svg',
      iconSize: [20, 30],
      iconAnchor: [18, 18]
    })

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
  }

}
