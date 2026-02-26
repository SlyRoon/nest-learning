import { IEbook } from '../../contracts/ devices/ebook.interface';

export class IproneEbook implements IEbook {
  getInfo(): string {
    return 'Iprone Ebook: 10 Oleg , 16GB RAM';
  }
}
