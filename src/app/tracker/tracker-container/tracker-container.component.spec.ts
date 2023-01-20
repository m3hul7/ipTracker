import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerContainerComponent } from './tracker-container.component';

describe('TrackerContainerComponent', () => {
  let component: TrackerContainerComponent;
  let fixture: ComponentFixture<TrackerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackerContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
