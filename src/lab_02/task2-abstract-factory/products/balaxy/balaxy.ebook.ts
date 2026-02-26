import { IEbook } from '../../contracts/ devices/ebook.interface';

export class BalaxyEbook implements IEbook {
  getInfo(): string {
    return 'Balaxy Ebook: 10 Oleg , 16GB RAM';
  }
}
