import { INetbook } from '../../contracts/ devices/netbook.interface';

export class IproneNetBook implements INetbook {
  getInfo(): string {
    return 'Iprone NetBook: 12 Oleg , 8GB RAM';
  }
}
