import {IotUser} from '../iot-user';

export interface Notification {
  data: string;
  type: string;
  user: IotUser;
}
