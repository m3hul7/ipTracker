import { TestBed } from '@angular/core/testing';

import { TrackerPresenterService } from './tracker-presenter.service';

describe('TrackerPresenterService', () => {
  let service: TrackerPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackerPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
