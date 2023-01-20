import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {

  private api = "http://ipwho.is/";

  constructor(private http: HttpClient) { }

  getLatLng(ip:any): Observable<any> {
    return this.http.get(`${this.api}/${ip}`)
  }
}
