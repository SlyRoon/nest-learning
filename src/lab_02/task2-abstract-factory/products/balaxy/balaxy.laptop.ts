import { ILaptop } from '../../contracts/ devices/laptop.interface';

export class BalaxyLaptop implements ILaptop {
  getInfo(): string {
    return 'Balaxy LapTopp: 16 Oleg , 32GB RAM';
  }
}
