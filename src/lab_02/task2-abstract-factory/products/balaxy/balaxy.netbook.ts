import { INetbook } from '../../contracts/ devices/netbook.interface';

export class BalaxyNetBook implements INetbook {
  getInfo(): string {
    return 'Balaxy NetBook: 12 Oleg , 8GB RAM';
  }
}
