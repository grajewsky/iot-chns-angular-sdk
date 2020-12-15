import {Component, Input, OnInit} from '@angular/core';
import {Notification} from './notification';

@Component({
  selector: 'iot-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor() { }

  @Input()
  notification: Notification;

  ngOnInit(): void {
  }

}
