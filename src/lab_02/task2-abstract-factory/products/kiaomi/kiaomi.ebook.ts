import { IEbook } from '../../contracts/ devices/ebook.interface';

export class KiaomiEbook implements IEbook {
  getInfo(): string {
    return 'Kiaomi Ebook: 10 Oleg , 16GB RAM';
  }
}
