import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TrackerService } from '../tracker.service';

@Component({
  selector: 'app-tracker-container',
  templateUrl: './tracker-container.component.html',
  styleUrls: ['./tracker-container.component.scss']
})
export class TrackerContainerComponent implements OnInit {

  public getLatlng$: Observable<any>;

  constructor(private _ts: TrackerService) { 
    this.getLatlng$ = new Observable();
  }

  ngOnInit(): void {
  }

  emittedIpAddr(event:any) {
    this.getLatlng$ = this._ts.getLatLng(event);
  }

}
