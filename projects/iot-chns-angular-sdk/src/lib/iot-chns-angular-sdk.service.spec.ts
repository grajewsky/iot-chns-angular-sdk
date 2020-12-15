import { TestBed } from '@angular/core/testing';

import { IotChnsAngularSdkService } from './iot-chns-angular-sdk.service';

describe('IotChnsAngularSdkService', () => {
  let service: IotChnsAngularSdkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IotChnsAngularSdkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
