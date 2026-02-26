import { ISmartPhone } from '../../contracts/ devices/smartphone.interface';

export class IproneSmartPhone implements ISmartPhone {
  getInfo(): string {
    return 'Iprone SmartPhone: 6 Oleg , 4GB RAM';
  }
}
