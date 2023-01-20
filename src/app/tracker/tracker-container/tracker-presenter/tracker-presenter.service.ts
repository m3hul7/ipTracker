import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackerPresenterService {

  private ipaddr: Subject<any>;
  public ipaddr$: Observable<any>;

  constructor(private fb: FormBuilder) { 
    this.ipaddr = new Subject();
    this.ipaddr$ = new Observable();
    this.ipaddr$ = this.ipaddr.asObservable();
  }

  public buildForm() {
    return this.fb.group({
      ip: ['']
    })
  }

  public getIP(ip: any): void {
    this.ipaddr.next(ip);
  }
}
