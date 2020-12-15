import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IotChnsAngularSdkComponent } from './iot-chns-angular-sdk.component';

describe('IotChnsAngularSdkComponent', () => {
  let component: IotChnsAngularSdkComponent;
  let fixture: ComponentFixture<IotChnsAngularSdkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IotChnsAngularSdkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IotChnsAngularSdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
