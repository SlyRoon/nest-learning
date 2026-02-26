import { ILaptop } from '../../contracts/ devices/laptop.interface';

export class KiaomiLaptop implements ILaptop {
  getInfo(): string {
    return 'Kiaomi LapTopp: 16 Oleg , 32GB RAM';
  }
}
