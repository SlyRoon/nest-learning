import { ISmartPhone } from '../../contracts/ devices/smartphone.interface';

export class KiaomiSmartPhone implements ISmartPhone {
  getInfo(): string {
    return 'Kiaomi SmartPhone: 6 Oleg , 4GB RAM';
  }
}
