import { NgModule } from '@angular/core';
import { IotChnsAngularSdkComponent } from './iot-chns-angular-sdk.component';
import { NotificationsBoxComponent } from './notifications-box/notifications-box.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificationFormComponent } from './notification-form/notification-form.component';



@NgModule({
  declarations: [IotChnsAngularSdkComponent, NotificationsBoxComponent, NotificationComponent, NotificationFormComponent],
  imports: [
  ],
  exports: [IotChnsAngularSdkComponent]
})
export class IotChnsAngularSdkModule { }
