import { Injectable } from '@nestjs/common';
import { Brand } from '../contracts/brand.enum';
import { ILaptop } from '../contracts/ devices/laptop.interface';
import { KiaomiLaptop } from '../products/kiaomi/kiaomi.laptop';
import { IEbook } from '../contracts/ devices/ebook.interface';
import { KiaomiEbook } from '../products/kiaomi/kiaomi.ebook';
import { INetbook } from '../contracts/ devices/netbook.interface';
import { KiaomiNetBook } from '../products/kiaomi/kiaomi.netbook';
import { ISmartPhone } from '../contracts/ devices/smartphone.interface';
import { KiaomiSmartPhone } from '../products/kiaomi/kiaomi.smartphone';

@Injectable()
export class KiaomiFactory {
  readonly brand: Brand = Brand.Kiaomi;
  createLaptop(): ILaptop {
    return new KiaomiLaptop();
  }
  createEbook(): IEbook {
    return new KiaomiEbook();
  }
  createNetBook(): INetbook {
    return new KiaomiNetBook();
  }
  createSmartPhone(): ISmartPhone {
    return new KiaomiSmartPhone();
  }
}
