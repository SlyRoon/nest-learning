import { INetbook } from '../../contracts/ devices/netbook.interface';

export class KiaomiNetBook implements INetbook {
  getInfo(): string {
    return 'Kiaomi NetBook: 12 Oleg , 8GB RAM';
  }
}
