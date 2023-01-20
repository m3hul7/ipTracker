import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerPresentationComponent } from './tracker-presentation.component';

describe('TrackerPresentationComponent', () => {
  let component: TrackerPresentationComponent;
  let fixture: ComponentFixture<TrackerPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackerPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
