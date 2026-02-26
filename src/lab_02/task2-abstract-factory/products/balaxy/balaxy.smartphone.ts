import { ISmartPhone } from '../../contracts/ devices/smartphone.interface';

export class BalaxySmartPhone implements ISmartPhone {
  getInfo(): string {
    return 'Balaxy SmartPhone: 6 Oleg , 4GB RAM';
  }
}
