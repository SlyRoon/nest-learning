import { ILaptop } from '../../contracts/ devices/laptop.interface';

export class IproneLaptop implements ILaptop {
  getInfo(): string {
    return 'Iprone LapTopp: 16 Oleg , 32GB RAM';
  }
}
